class Issue < ActiveRecord::Base
  belongs_to :user
  validates_inclusion_of :status ,in: %w(pending completed)

  before_validation :set_pending_status
  after_create :create_issue_on_jira

  private
  def set_pending_status
    self.status = 'pending' unless self.status
  end

  def create_issue_on_jira
    IssueCreationWorker.perform_async(self.id)
  end
end