require 'rails_helper'

RSpec.describe IssuesController, :type => :controller do

  before(:each) do
    request.env['HTTP_ACCEPT'] = 'application/json'
    FactoryGirl.create(:user, username: 'test_user')
  end

  describe 'index' do
    it 'should return all the issues and also return auto refresh flag as true if any of the issue is pending' do
      create_pending_issue('title-1', 'env')
      create_pending_issue('title-2', 'env')

      get :index

      expect(response).to be_success

      json_response = JSON.parse(response.body, symbolize_names: true)

      expect(json_response[:auto_refresh_flag]).to eql(true)

      issues = json_response[:issues]

      expect(issues.size).to eql(2)
      expect(issues[0][:title]).to eql('title-2')
      expect(issues[1][:title]).to eql('title-1')
    end

    it 'should return auto refresh flag as false if none of the issue if pending' do
      create_pending_issue('title-1', 'env')
      create_pending_issue('title-2', 'env')

      Issue.all.each do |issue|
        issue.status = 'completed'
        issue.save
      end

      get :index

      expect(response).to be_success

      json_response = JSON.parse(response.body, symbolize_names: true)

      expect(json_response[:auto_refresh_flag]).to eql(false)
    end
  end


  describe 'create' do
    it 'should create a issue' do

      expect(IssueCreationWorker).to receive(:perform_async)

      post :create, { title: 'new-title', environment: 'new-environment'  }

      expect(response).to be_success

      issues = JSON.parse(response.body, symbolize_names: true)[:issues]

      expect(issues.size).to eql(1)

      issue = Issue.last

      expect(issue.title).to eql('new-title')
      expect(issue.environment).to eql('new-environment')
      expect(issue.status).to eql('pending')
    end
  end
end
