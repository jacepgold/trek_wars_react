Rails.application.routes.draw do
  namespace :api do # Change URLs to /api/<whatever>
    resources :locations
    resources :characters
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index' # For production
end
