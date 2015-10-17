class GroupsController < ApplicationController
  def create
    @group = Group.new(group_params)
    if @group.save
      render json: {status: 200, message: 'Este grupo foi registrado com sucesso'}
    else
      render json: @group.erros, status: :unprocessable_entity, message: 'Erro ao registrar este grupo'
    end
  end

  protected
    def group_params
      params.require(:group).permit(people_attributes: [:id, :name, :email, :_destroy])
    end
end
