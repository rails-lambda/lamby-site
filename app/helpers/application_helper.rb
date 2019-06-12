module ApplicationHelper

  def theme_class
    'lb-Theme--blue'
  end

  def doc_link(slug, options = {})
    name = doc_name(slug)
    name << options.delete(:link_suffix)
    link_to name, doc_lpath(slug), options
  end

  def doc_name(slug)
    case slug
    when :installing_aws_sam then 'Installing AWS SAM'
    when :asset_host_and_precompiling then 'Asset Hosts & Precompiling'
    when :environment_and_configuration then 'Environment & Configuration'
    when :bin_scripts_build_and_deploy then 'Build & Deploy'
    when :custom_domain_name_and_cloudfront then 'Custom Domain Name & CloudFront'
    when :how_does_lamby_work then 'How Does Lamby Work?'
    when :api_gateway_and_cloudwatch_logs then 'API Gateway & CloudWatch Logs'
    else slug.to_s.titleize
    end
  end

  def doc_lpath(slug, options = {})
    doc_path options.merge(id: slug)
  end

  def doc_next(slug)
    content_tag :div, class: 'lb-Page-nav' do
      doc_link slug, link_suffix: ' →', class:
        'lb-Button lb-Button-fullResponsive mui-btn mui-btn--large mui-btn--danger mui-btn--raised'
    end
  end

end
