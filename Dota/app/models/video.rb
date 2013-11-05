class Video < ActiveRecord::Base


  attr_accessible :description, :image_url, :kind, :title ,:comment,:avatar,:comment_version

 # ensure that there are no video review referencing this product
  has_attached_file :avatar,:path => ":rails_root/public/:id_partition/:filename"
  end


