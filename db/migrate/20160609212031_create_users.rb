class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :jira_username, null: false
      t.string :jira_password, null: false
    end
  end
end
