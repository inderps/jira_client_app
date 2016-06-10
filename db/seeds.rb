unless User.find_by_username('test_user')
  User.create(username: 'test_user', jira_username: 'tester', jira_password: 'cirro.may.2016')
end
