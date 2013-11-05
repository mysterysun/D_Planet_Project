class VideoStoreController < ApplicationController
  def index
    @videos = Video.order(:title)
  end

end
