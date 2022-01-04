class AlterFiltersAddVertical < ActiveRecord::Migration[6.0]
  def change
    add_column :filters, :vertical, :boolean
  end
end
