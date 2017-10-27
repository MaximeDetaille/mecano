class Recommendation < ActiveRecord::Base
  belongs_to :domain
  belongs_to :user
  validates_uniqueness_of :user_id, scope: :domain_id
  validate :no_self_recommendation #important (a mecano mustn't be able to recommend himself)

  def no_self_recommendation
    Rails.logger.debug("user_id: #{user_id}")
    Rails.logger.debug("domain: #{domain.id}")
    Rails.logger.debug("mecano_profile: #{domain.mecano_profile.user_id}")
    errors.add(:user_id, "Vous ne pouvez pas vous recommander vous-même") if user_id == domain.mecano_profile.user_id
  end

  def name
    return "#{domain.value}-#{user.display_name}"
  end
end
