module CodeHelper

  def code_highlight(lang = :ruby, &block)
    code = capture(&block).strip_heredoc.strip
    lexer = Rouge::Lexer.find(lang)
    formatter = Rouge::Formatters::HTMLLegacy.new css_class: 'highlight'
    formatter.format(lexer.lex(code)).html_safe
  end

end
