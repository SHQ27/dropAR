Rails.application.routes.draw do
  root :controller => 'home', :action => :index 

  get '/en', to: "home#index_en"
  get '/es', to: "home#index"
  get '/filters/model', to: "filter#model"
  get '/filters/ar', to: "filter#ar"
  get '/tester', to: "filter#tester"
  post '/send_mail', to: "home#send_mail"

  namespace 'api' do
    namespace 'v1' do
    end
  end

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
