class Filter < ApplicationRecord

  belongs_to :client 
  has_one_attached :usdz_attachment
  has_one_attached :glb_attachment

  def usdz_url
    url = ""
    if usdz_attachment.attached?
       url = Rails.application.routes.url_helpers.url_for(usdz_attachment)
       uri = URI.parse(url)
       uri.scheme = "https"
       url = uri.to_s
    end
    url
  end

  def glb_url
    url = ""
    if glb_attachment.attached?
       url = Rails.application.routes.url_helpers.url_for(glb_attachment)
       uri = URI.parse(url)
       uri.scheme = "https"
       url = uri.to_s
    end
    url
  end


end
