Rails.application.routes.draw do
  default_url_options :host => "localhost:3000"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :organizations do
      member do
        get 'join'
        get 'leave'
      end
    end
    resources :shifts, only: [:index, :create, :update, :destroy]
    resources :password_resets
  end
  root "static_pages#root"
end