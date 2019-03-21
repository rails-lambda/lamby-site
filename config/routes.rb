Rails.application.routes.draw do
  root to: 'application#index'
  get 'test', to: 'application#test'
  post 'login', to: 'application#login'
  delete 'logout', to: 'application#logout'
  get 'cache', to: 'application#cache'
  get 'exception', to: 'application#exception'
end
