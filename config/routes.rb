Rails.application.routes.draw do
  root to: 'application#index'
  get 'test', to: 'application#test'
end
