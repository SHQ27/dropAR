class RenameFileColumnsInFilter < ActiveRecord::Migration[6.0]
  def up
    rename_column :filters, :usdz_url, :usdz_attachment
    rename_column :filters, :glb_url, :glb_attachment
  end

  def down
    rename_column :filters, :usdz_attachment, :usdz_url
    rename_column :filters, :glb_attachment, :glb_url
  end
end
