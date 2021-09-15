class HomeController < ApplicationController

  def index
    response.headers.delete "X-Frame-Options"
    client_id = params[:client].to_i
    product_code = params[:filter]

    if client_id && product_code
      selectedFilter = Filter.find_by(product_code: product_code)
      
      if selectedFilter && selectedFilter.client.id == client_id
        flash.notice = 'Filter found!'
        @filter = selectedFilter

      else 
        redirect_to(root_url, flash: {error: 'Filter not found.'});
      end
    end
    @clients = Client.all
  end

end
