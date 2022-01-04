ActiveAdmin.register Client do
  menu priority: 2

  # Parámetros permitidos para el form
  permit_params :name, :description, :code


  
end
