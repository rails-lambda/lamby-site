class DocsController < ApplicationController

  def show
    render params[:id]
  end

end
