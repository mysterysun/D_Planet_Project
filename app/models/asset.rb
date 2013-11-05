class Asset < ActiveRecord::Base
  attr_accessible :video_id,:asset
  has_attached_file :asset,:path => ":rails_root/public/:id_partition/:filename.:extension"
  belongs_to:video

end
