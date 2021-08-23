class AddClientToFilter < ActiveRecord::Migration[6.0]

  def up
    add_column :filters, :client_id, :integer
    add_foreign_key :filters, :clients
  end

  def down
    remove_column :filters, :client_id, :integer
    remove_foreign_key :filters, :clients
  end

end
