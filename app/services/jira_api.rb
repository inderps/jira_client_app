class JiraApi
  def initialize(connection = nil)
    if !connection
      @connection = Faraday.new(:url => 'https://testcloud.atlassian.net') do |faraday|
        faraday.request  :url_encoded
        faraday.response :logger
        faraday.adapter  Faraday.default_adapter
      end
    else
      @connection = connection
    end
  end

  def create_issue issue
    @connection.basic_auth(issue.user.jira_username, issue.user.jira_password)
    response = @connection.post do |req|
      req.url 'rest/api/2/issue'
      req.headers['Content-Type'] = 'application/json'
      req.body = {
        fields: {
          project: {
            key: 'DPXXL',
          },
          issuetype: {
            id: '1',
          },
          summary: issue.title,
          environment: issue.environment
        }
      }.to_json
    end
    if response.status == 201
      issue.jira_issue_id = JSON.parse(response.body)["id"]
      issue.status = 'completed'
      issue.save
    else
      # handle exception here
    end
  end
end