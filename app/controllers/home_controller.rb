class HomeController < ApplicationController
  def index
    @escritorioQR = QrService.urlToQR(filters_path(:client => 'TESTCLI', :filter => 'escritorio', :ar => 'true'), 'escritorio')
  end
end
