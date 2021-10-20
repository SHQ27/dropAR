Rails.application.routes.draw do
  root :controller => 'home', :action => :index 

  get '/filters', to: "filter#show"
  get '/tester', to: "filter#tester"

  namespace 'api' do
    namespace 'v1' do
    end
  end

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
