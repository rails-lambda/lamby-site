class SmokesController < ActionController::Base
  helper_method :logged_in?

  def index
    render
  end

  def login
    if params[:password] == 'password'
      session[:logged_in] = 'true'
    end
    redirect_to smokes_url
  end

  def logout
    reset_session
    redirect_to smokes_url
  end

  def exception
    raise 'hell'
  end

  def cache
    expires_in 10.seconds, public: true
  end

  def image
    data = File.read Rails.root.join("app/images/#{params[:size]}.png")
    send_data data, type: 'image/png', disposition: 'inline'
  end

  private

  def logged_in?
    session[:logged_in] == 'true'
  end
end
