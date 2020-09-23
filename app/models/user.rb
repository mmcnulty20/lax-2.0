# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    before_validation :ensure_session_token

    attr_reader :password

    # Validations
    validates :username, presence: { message: "This is required — you’ll need to enter a name." }
    validates :email, presence: { message: "This is required — you’ll need to enter an email." }
    validates :email, uniqueness: { message: "That email is already in use." }
    validates :password, presence: { message: "This is required — you’ll need to enter a password." }, on: :create
    validates :password, length: {
        minimum: 6,
        maximum: 72,
        allow_nil: true,
        too_short: "Your password must be at least 6 characters long.",
        too_long: "Your password can’t be more than 72 characters long."
    }
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    
    def self.find_by_credentials(credentials)
        user = self.find_by(username: credentials[:email])
        return unless user
        user if user.is_password?(credentials[:password])
    end
    
    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end
    
    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        update!(session_token: self.class.generate_session_token)
        session_token
    end

    private
    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end
end
