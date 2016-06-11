class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :auto_login_test_user

  def auto_login_test_user
    @current_user ||= User.find_by_username('test_user')
  end
end
