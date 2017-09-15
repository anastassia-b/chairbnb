require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'GET #new' do
    it 'renders the new users'

  end

  describe 'POST #create' do
    context 'with invalid params' do
      it 'validates the presence of username'

      it 'validates password length'
    end

    context 'with valid params' do
      it 'logs in the user'

      it 'redirects to index on success'

    end

  end


end
