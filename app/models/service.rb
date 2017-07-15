class Service < ActiveRecord::Base
  extend Enumerize
  belongs_to :mecano_profile
  belongs_to :user
  belongs_to :vehicle
  enumerize :status, in: [:pending, :canceled, :finished]
  validates_presence_of :user_id, :mecano_profile_id, :status
  validates_uniqueness_of :user_id, scope: [:mecano_profile_id], unless: :advanced_service?
  validate :no_self_service #funny but important (a mecano who wants good advices mustn't be able to contact and then rate himself)


  private

  def no_self_service
    errors.add(:user_id, "Vous ne pouvez pas vous contacter vous-même") if user_id == mecano_profile.user_id
  end

  def advanced_service?
    status != "pending"
  end
end
