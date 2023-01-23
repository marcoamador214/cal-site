Rails.application.routes.draw do
  
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  post "/signup", to: "users#create"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"

  get "/auth", to: "users#show"

  get "/me", to: "users#show"

  delete "/logout", to: "sessions#destroy"

  get "/questions", to: "questions#index"

  post "/commentspost", to: "comments#create"

 delete "/comments/:id", to: "commentss#destroy"

#  delete '/photos/:id', to: 'photos#destroy', as: 'delete_photo'
end
