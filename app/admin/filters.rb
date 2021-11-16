ActiveAdmin.register Filter do
  menu priority: 1

  # Parámetros permitidos para el form
  permit_params :name, :description, :product_code, :client_id, :usdz_attachment, :glb_attachment, :vertical, :callback_url

  sidebar "QR", only: :show do
    image_tag QrService.urlToQR(filters_path(:client => resource.client.code, :filter => resource.product_code, :ar => 'true'), resource.product_code, resource.callback_url), style: 'height:auto;width:100%;'
  end

  index do
    column :name
    column :description
    column :product_code
    column :client
    column :vertical
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
      row :vertical
      row :url do
        Rails.application.routes.url_helpers.root_url.delete_suffix('/') + filters_path(:client => resource.client.code, :filter => resource.product_code, :ar => 'true') + '&callback="' + resource.callback_url + '"'

      end
      render 'partials/model-viewer', {filter: filter}
    end
  end

  form do |f|
    f.inputs "Filter" do
      f.input :name
      f.input :description
      f.input :product_code
      f.input :callback_url
      f.input :client_id, as: :select, collection: Client.all, label: 'Cliente'
      f.input :usdz_attachment, as: :file, label: 'USDZ'
      f.input :glb_attachment, as: :file, label: 'GLB'
      f.input :vertical, as: :boolean
    end
    f.actions
  end
  
end
