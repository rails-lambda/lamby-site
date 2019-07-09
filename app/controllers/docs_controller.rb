class DocsController < ApplicationController
  before_action :redirect_old_permaliks

  def show
    render permalink
  end

  private

  def redirect_old_permaliks
    if custom_domain_name_and_cloudfront?
      redirect_to doc_url(id: :custom_domain_name_cloudfront_and_ssl_application_load_balancer)
    end
  end

  def permalink
    params[:id]
  end

  def custom_domain_name_and_cloudfront?
    permalink == 'custom_domain_name_and_cloudfront'
  end

end
