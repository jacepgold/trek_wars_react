class Api::CharactersController < ApplicationController
  before_action :set_character, except: [:index, :create]

  # query string: localhost:3001/api/characters?nerd_type=starwars
  def index
    if nerd_type = params[:nerd_type]
      render json: Character.all.where(nerd_type: nerd_type)
    else
      render json: Character.all
    end
  end

  def show
  end

  def create
  end

  def update
    # { character: { name: 'new updated name' } } - is how Axios needs to send data
    if @character.update(character_params)
      render json: @character
    else
      render json: { errors: @character.errors.full_message.join(',')}, status: :bad_request
    end
  end

  def destroy
  end

  private
    def character_params
      params.require(:character).permit(:name, :active)
    end
    
    def set_character
      @character = Character.find(params[:id])
    end
end