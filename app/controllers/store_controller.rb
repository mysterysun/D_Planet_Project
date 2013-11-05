class StoreController < ApplicationController
  def index
    @products =Product.order(:title)
    render layout: "navi-bar"
  end
end
