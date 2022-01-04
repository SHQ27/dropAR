class AlterFiltersAddCallbackUrl < ActiveRecord::Migration[6.0]
  def change
    add_column :filters, :callback_url, :string
  end
end
