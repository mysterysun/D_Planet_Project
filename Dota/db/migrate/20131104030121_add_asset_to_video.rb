class AddAssetToVideo < ActiveRecord::Migration
  def self.up
    add_attachment :assets, :asset
  end

  def self.down
    remove_attachment :assets, :asset
  end
end
