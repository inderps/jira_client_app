class IssuesController < ApplicationController
  def index
    render json: list_of_issues
  end

  def create
    Issue.create(title: params[:title], environment: params[:environment], user: @current_user)
    render json: list_of_issues
  end

  private
  def list_of_issues
    Issue.order(id: :desc).map{ |issue| {
        title: issue.title,
        environment: issue.environment,
        status: issue.status,
        jira_issue_id: issue.jira_issue_id
      }
    }
  end
end
