module NavigationHelper

  def nav_link(link, path)
    link_to link, path, class: nav_class(path)
  end

  def nav_link_doc(name)
    nav_link doc_name(name), doc_lpath(name)
  end

  def nav_class(path)
    path == request.path ? 'is-active' : ''
  end

end
