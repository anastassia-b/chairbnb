require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'session token' do
    it 'assigns a session_token if one doesnt exist' do
      ana = User.create(username: 'anastassia', password: 'password')
      expect(ana.session_token).not_to be_nil
    end

  end

  describe 'password encryption' do
    it 'does not save passwords to the db' do
      User.create!(username: 'anastassia', password: 'password')
      user = User.find_by_username('anastassia')
      expect(user.password).not_to be('password')
    end

    it 'uses BCrypt to encrypt a password' do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: 'anastassia', password: 'password')
    end
  end

end
