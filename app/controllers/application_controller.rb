class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :auto_login_test_user

  # as there is no authentication in place, I'm assuming test user is already logged in
  def auto_login_test_user
    @current_user ||= User.find_by_username('test_user')
  end
end
