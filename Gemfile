source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

gem 'rails', '~> 5.2.2'
gem 'dotenv-rails'
gem 'lamby', require: false
gem 'redcarpet'
gem 'rouge'
gem 'sass-rails'
gem 'sassc'
gem 'turbolinks'
gem 'uglifier', require: false

group :development, :test do
  gem 'byebug'
  gem 'puma'
end

group :development do
  gem 'aws-sdk-ssm'
  gem 'listen'
  gem 'web-console'
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'chromedriver-helper'
end
