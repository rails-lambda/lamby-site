class DocsController < ApplicationController
  before_action :redirect_missing_doc
  before_action :redirect_old_permaliks

  def show
    render permalink
  end

  private

  def redirect_missing_doc
    redirect_to root_url unless template_exists?("docs/#{permalink}")
  end

  def redirect_old_permaliks
    case permalink
    when 'how_does_lamby_work', 'install_lamby'
      redirect_to doc_url(id: :anatomy)
    when 'custom_domain_name_and_cloudfront',
         'custom_domain_name_cloudfront_and_ssl_application_load_balancer',
         'custom_domain_name_and_cloudfront_api_gateway'
      redirect_to doc_url(id: :custom_domain_name)
    end
  end

  def permalink
    params[:id]
  end
end
