require 'rails_helper'

RSpec.describe IssuesController, :type => :controller do

  before(:each) do
    request.env['HTTP_ACCEPT'] = 'application/json'
    FactoryGirl.create(:user, username: 'test_user')
  end

  describe 'index' do
    it 'should return all the issues' do
      create_pending_issue('title-1', 'env')
      create_pending_issue('title-2', 'env')

      get :index

      expect(response).to be_success

      issues = JSON.parse(response.body, symbolize_names: true)

      expect(issues.size).to eql(2)
      expect(issues[0][:title]).to eql('title-2')
      expect(issues[1][:title]).to eql('title-1')
    end
  end


  describe 'create' do
    it 'should create a issue' do

      expect(IssueCreationWorker).to receive(:perform_async)

      post :create, { title: 'new-title', environment: 'new-environment'  }

      expect(response).to be_success

      issues = JSON.parse(response.body, symbolize_names: true)

      expect(issues.size).to eql(1)

      issue = Issue.last

      expect(issue.title).to eql('new-title')
      expect(issue.environment).to eql('new-environment')
      expect(issue.status).to eql('pending')
    end
  end
end
