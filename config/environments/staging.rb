require_relative 'production'

Rails.application.configure do
  config.action_controller.asset_host = 'https://assets-staging.custominktech.com'
end
