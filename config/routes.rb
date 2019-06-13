Rails.application.routes.draw do
  root to: 'application#index'
  resources :docs, only: [:show]
end
