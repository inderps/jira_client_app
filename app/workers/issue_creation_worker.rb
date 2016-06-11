class IssueCreationWorker
  include Sidekiq::Worker
  def perform(issue_id)
    issue = Issue.find_by_id(issue_id)
    JIRA_API_SERVICE.create_issue(issue)
  end
end