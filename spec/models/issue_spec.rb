require 'rails_helper'

describe 'Issue' do
  subject { Issue.new }

  describe 'attributes' do
    it { should respond_to(:title) }
    it { should respond_to(:environment) }
    it { should validate_inclusion_of(:status).in_array(%w(pending completed))}
  end
end