Rails.application.routes.draw do
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
  end
  root "static_pages#root"
end