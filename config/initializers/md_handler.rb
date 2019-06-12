module LambyDemo
  class ERBMD < ActionView::Template::Handlers::ERB

    class HTML < Redcarpet::Render::HTML
      require 'rouge/plugins/redcarpet'
      include Rouge::Plugins::Redcarpet
    end

    class << self

      def to_html(compiled_source)
        ext = markdown_extensions
        Redcarpet::Markdown.new(HTML.new(ext), ext).render(compiled_source)
      end

      private

      def markdown_extensions
        { no_intra_emphasis: true,
          fenced_code_blocks: true,
          autolink: true,
          strikethrough: true,
          lax_spacing: true,
          superscript: true,
          with_toc_data: true }
      end

    end

    def call(template)
      compiled_source = erb_handler.call(template)
      "LambyDemo::ERBMD.to_html(begin;#{compiled_source};end).html_safe"
    end

    private

    def erb_handler
      @erb_handler ||= ActionView::Template.registered_template_handler(:erb)
    end

  end
end

ActionView::Template.register_template_handler :erbmd, LambyDemo::ERBMD.new
