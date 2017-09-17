require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'GET #new' do
    it 'renders the new users template' do
      get :new
      expect(response).to render_template('new')
    end

  end

  describe 'POST #create' do
    context 'with invalid params' do
      it 'validates the presence of username and password' do
        post :create, params: { user: { username: 'anastassia', password: 'password'} }
        expect(response).to render_template('new')
        expect(flash[:errors]).to be_present
      end

      it 'validates password length' do
        post :create, params: { user: { username: 'anastassia', password: 'short'} }
        expect(response).to render_template('new')
        expect(flash[:errors]).to be_present
      end
    end

    context 'with valid params' do
      it 'logs in the user' do
        post :create, params: { user: { username: 'anastassia', password: 'password'} }
        user = User.find_by_username('anastassia')
        expect(session[:session_token]).to eq(user.session_token)
      end

      it 'redirects to index on success' do
        post :create, params: { user: { username: 'anastassia', password: 'password'} }
        expect(response).to redirect_to("/")
      end

    end

  end


end
