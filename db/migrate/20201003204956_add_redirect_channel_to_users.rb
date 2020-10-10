class AddRedirectChannelToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :redirect_channel, :integer, null: false
    add_index :users, :redirect_channel
  end
end
