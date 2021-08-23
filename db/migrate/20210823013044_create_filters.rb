class CreateFilters < ActiveRecord::Migration[6.0]
  def change
    create_table :filters do |t|
      t.string :name
      t.string :description
      t.string :product_code
      t.string :usdz_url
      t.string :glb_url

      t.timestamps
    end
  end
end
