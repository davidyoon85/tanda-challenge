# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  organization_id        :integer
#  name                   :string           not null
#  email                  :string           not null
#  password_digest        :string           not null
#  session_token          :string           not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  password_reset_token   :string
#  password_reset_sent_at :datetime
#

class User < ApplicationRecord
    attr_reader :password
  
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :password, confirmation: { case_sensitive: true }
    validates :email, presence: true, uniqueness: true
  
    after_initialize :ensure_session_token

    has_many :shifts,
      primary_key: :id,
      foreign_key: :user_id,
      class_name: :Shift
  
    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      return nil unless user
      user.is_password?(password) ? user : nil
    end
  
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def change_password(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
      self.save!
    end
  
    def reset_session_token!
      generate_unique_session_token
      save!
      self.session_token
    end

    def send_password_reset
      self.password_reset_token = new_session_token
      self.password_reset_sent_at = Time.zone.now
      save!
      UserMailer.password_reset(self).deliver
    end
  
    private
  
    def ensure_session_token
      generate_unique_session_token unless self.session_token
    end
  
    def new_session_token
      SecureRandom.urlsafe_base64
    end
  
    def generate_unique_session_token
      self.session_token = new_session_token
      while User.find_by(session_token: self.session_token)
        self.session_token = new_session_token
      end
      self.session_token
    end
  
  end
  
