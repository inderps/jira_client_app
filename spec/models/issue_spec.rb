require 'rails_helper'

describe 'Issue' do
  subject { Issue.new }

  describe 'attributes' do
    it { should respond_to(:title) }
    it { should respond_to(:environment) }
    it { should validate_inclusion_of(:status).in_array(%w(pending completed))}
  end

  describe 'create' do
    let(:user) { FactoryGirl.create(:user) }

    it 'should create the issue with default status as pending and call issue creation worker' do
      expect(IssueCreationWorker).to receive(:perform_async)

      issue = Issue.create(title: 'some title', environment: 'some-env', user: user)

      expect(issue.status).to eql('pending')
    end
  end
end