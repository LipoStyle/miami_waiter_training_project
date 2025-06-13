Rails.application.routes.draw do
  post '/login', to: 'auth#login'

  # API routes
  namespace :api do
    namespace :v1 do
      resources :employees, only: [:index, :create, :destroy, :show, :update]
      resources :cocktail_recipes, only: [:index, :create, :destroy, :show, :update]

      # laod the profile informaitons for the empolyee from the employee request
      get '/profile', to: 'profiles#show'
      
    end
  end

  get "up" => "rails/health#show", as: :rails_health_check
end
