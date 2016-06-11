class AddJiraIssueIdToIssues < ActiveRecord::Migration
  def change
    add_column :issues, :jira_issue_id, :string
  end
end
