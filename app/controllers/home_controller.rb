class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:send_mail]
  def index
    @escritorioQR = QrService.urlToQR(filters_path(:client => 'TESTCLI', :filter => 'escritorio', :ar => 'true'), 'escritorio')
  end

  def send_mail
    name = params[:name]
    email = params[:email]
    message = params[:message]

    c = ContactForm.new(name: name, email: email, message: message) 
    c.deliver
    redirect_to root_path, notice: "Su consulta ha sido enviada exitosamente!"
  end
end
