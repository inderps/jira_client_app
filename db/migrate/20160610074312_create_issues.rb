class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.string :title, null: false
      t.string :environment, null: false
      t.string :status, null: false
      t.references :user
    end
  end
end
