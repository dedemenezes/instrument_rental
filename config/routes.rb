Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :offers do
    resources :deals, only: [:new, :create]
  end

  resources :deals, only: [:index] do
    member do
      post :approve
      post :deny
    end
  end
end
