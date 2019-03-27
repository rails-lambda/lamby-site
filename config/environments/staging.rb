require_relative 'production'

Rails.application.configure do
  config.action_controller.asset_host = 'https://lambyassets-staging.metademo.net'
end
