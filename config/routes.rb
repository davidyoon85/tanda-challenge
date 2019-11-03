Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :organizations, only: [:index, :create, :update, :destroy]
    resources :shifts, only: [:create, :update, :destroy]
  end
  root "static_pages#root"
end
