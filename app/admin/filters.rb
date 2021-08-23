ActiveAdmin.register Filter do
  menu priority: 1

  # Parámetros permitidos para el form
  permit_params :name, :description, :product_code, :client_id, :usdz_attachment, :glb_attachment

  index do
    column :name
    column :description
    column :product_code
    column :client
    column :created_at
    column :updated_at
    actions
  end

  show do
    attributes_table do
      row :name
      row :description
      row :product_code
      row :client
      render 'partials/model-viewer', {filter: filter}
    end
  end

  form do |f|
    f.inputs "Filter" do
      f.input :name
      f.input :description
      f.input :product_code
      f.input :client_id, as: :select, collection: Client.all, label: 'Cliente'
      f.input :usdz_attachment, as: :file, label: 'USDZ'
      f.input :glb_attachment, as: :file, label: 'GLB'
    end
    f.actions
  end
  
end
