class MecanoProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :pro, :company_name, :wall_picture, :rating, :mobile, :address, :radius, :price, :city, :country, :all_vehicles
  has_many :domains
end