class IssuesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: list_of_issues
  end

  def create
    Issue.create(title: params[:title], environment: params[:environment], user: @current_user)
    render json: list_of_issues
  end

  private
  def list_of_issues
    issues =  Issue.order(id: :desc).map{ |issue| {
        title: issue.title,
        environment: issue.environment,
        status: issue.status,
        jira_issue_id: issue.jira_issue_id
      }
    }
    auto_refresh_flag = issues.select{|issue| issue[:status] == 'pending'}.any?
    {
        issues: issues,
        auto_refresh_flag: auto_refresh_flag,
    }
  end
end
