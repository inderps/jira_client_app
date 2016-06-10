class Issue < ActiveRecord::Base
  belongs_to :user
  validates_inclusion_of :status ,in: %w(pending completed)
end