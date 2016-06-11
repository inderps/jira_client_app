require 'rails_helper'

describe 'IssueCreationWorker' do
  let(:issue) { create_pending_issue }

  it 'should call jira api to create issue' do
    expect(JIRA_API_SERVICE).to receive(:create_issue).with(issue)

    worker = IssueCreationWorker.new

    worker.perform(issue.id)
  end
end