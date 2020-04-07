Rails.application.routes.draw do
  root to: 'application#index'
  resources :docs, only: [:show]
  resources :smokes, only: [:index] do
    collection do
      post   'login'
      delete 'logout'
      get    'cache'
      get    'exception'
      get    'image'
    end
  end
end
