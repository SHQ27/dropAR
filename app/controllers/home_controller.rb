class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:send_mail]
  def index
    @escritorioQR = QrService.urlToQR(filters_ar_path(:client => 'SITE', :filter => 'site0', :ar => 'true'), 'ar0')
    @ar1QR = QrService.urlToQR(filters_ar_path(:client => 'SITE', :filter => 'site1', :ar => 'true'), 'ar1')
    @ar2QR = QrService.urlToQR(filters_ar_path(:client => 'SITE', :filter => 'site2', :ar => 'true'), 'ar2')
    @ar3QR = QrService.urlToQR(filters_ar_path(:client => 'SITE', :filter => 'site3', :ar => 'true'), 'ar3')
    @ar4QR = QrService.urlToQR(filters_ar_path(:client => 'SITE', :filter => 'site4', :ar => 'true'), 'ar4')
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
