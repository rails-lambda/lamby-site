module ApplicationHelper

  def theme_class
    'lb-Theme--blue'
  end

  def main_class
    "lb-Main--#{controller_name}"
  end

  def doc_link(slug, options = {})
    name = doc_name(slug)
    name << options.delete(:link_suffix).to_s
    dopts = options.except(:class)
    lopts = options.slice(:class)
    link_to name, doc_lpath(slug, dopts), lopts
  end

  def doc_name(slug)
    case slug
    when :anatomy then "Lamby's Anatomy"
    when :installing_aws_sam then 'Installing AWS SAM'
    when :asset_host_and_precompiling then 'Precompiling CSS & JavaScript Assets'
    when :environment_and_configuration then 'Environment & Configuration'
    when :bin_scripts_build_and_deploy then 'Build & Deploy'
    when :custom_domain_names then 'Custom Domain Names, CloudFront, & SSL'
    when :api_gateway_and_cloudwatch_logs then 'API Gateway & CloudWatch Logs'
    when :activejob_and_lambda then 'ActiveJob & Lambda'
    when :logging_metrics_observability then 'Logging, Metrics, & Observability'
    when :database_options then 'Database & VPCs'
    when :cold_starts then 'Cold Starts'
    else slug.to_s.titleize
    end
  end

  def doc_lpath(slug, options = {})
    doc_path options.merge(id: slug)
  end

  def doc_next(slug)
    content_tag :div, class: 'lb-Page-nav' do
      doc_link slug, link_suffix: ' →', class: 'lb-Button lb-Button-fullResponsive mui-btn mui-btn--large mui-btn--danger mui-btn--raised'
    end
  end

  def disqus
    render partial: 'disqus' if disqus?
  end

  def disqus?
    Rails.env.production?
  end

end
