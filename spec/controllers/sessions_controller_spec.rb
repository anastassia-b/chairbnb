require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  let!(:user) { User.create({ username: 'anastassia', password: 'password' }) }

  describe 'GET #new' do
    it 'renders the new session template'
  end

  describe 'POST #create' do
    context 'with invalid credentials' do
      it 'returns to sign in with a non-existent user'

      it 'returns to sign in when password incorrect'

    end

    context 'with valid credentials' do
      it 'redirects user to index on success'

      it 'logs in the user'

    end
  end

  describe 'DELETE #destroy' do
    it 'logs out the current user'
  end
end
