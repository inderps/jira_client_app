require 'rails_helper'

stubs = Faraday::Adapter::Test::Stubs.new
stubbed_connection = Faraday.new do |builder|
  builder.adapter :test, stubs do |stub|
    stub.post('/rest/api/2/issue') do |env|
      [ 201, {}, {'id': '1'}.to_json ]
    end
  end
end

describe 'JiraApi' do
  describe 'issue' do
    let(:jira_api) { JiraApi.new(stubbed_connection) }

    let(:issue) { create_pending_issue }

    it 'should create a issue on jira' do

      expect(stubbed_connection).to receive(:basic_auth).with(issue.user.jira_username, issue.user.jira_password)

      expect(issue.status).to eq('pending')

      jira_api.create_issue(issue)

      expect(issue.status).to eq('completed')
      expect(issue.jira_issue_id).to eq('1')
    end
  end
end