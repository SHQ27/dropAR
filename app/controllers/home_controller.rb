class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:send_mail]

  def index
  end

  def index_en
  end

  def send_mail
    name = params[:name]
    email = params[:email]
    phone = params[:phone]
    message = params[:message]

    c = ContactForm.new(name: name, phone: phone, email: email, message: message) 
    c.deliver
    redirect_to root_path, notice: "Su consulta ha sido enviada exitosamente!"
  end
end
