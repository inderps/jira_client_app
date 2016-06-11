FactoryGirl.define do
  factory :issue do |i|
    i.title { 'some-title'  }
    i.environment { 'some-environment'  }
    i.user { FactoryGirl.create(:user) }
  end
end