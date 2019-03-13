ENV['SECRET_KEY_BASE'] = 'f9c3376ab32b05cffb112b437f01ba50660845019c81136edeb7f30f025900e24591c7180110460b990ceceaa23b94e261e4dd4f6bb79ad548f9c6f8cfe9062e'
require_relative 'config/boot'
require 'lamby'
require_relative 'config/application'
require_relative 'config/environment'

$app = Rack::Builder.new { run Rails.application }.to_app

def handler(event:, context:)
  Lamby.handler $app, event, context
end
