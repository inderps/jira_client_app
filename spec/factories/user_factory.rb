FactoryGirl.define do
  factory :user do |u|
    u.username { 'test_user'  }
    u.jira_username { 'jira_uname'  }
    u.jira_password { 'jira_pass'  }
  end
end