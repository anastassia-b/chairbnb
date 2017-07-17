Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :chairs, only: [:index, :show, :create]
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
end
