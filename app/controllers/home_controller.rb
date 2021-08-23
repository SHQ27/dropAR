class HomeController < ApplicationController

  def index
    client_id = params[:client].to_i
    product_code = params[:filter]

    if client_id && product_code
      selectedFilter = Filter.find_by(product_code: product_code)
      if selectedFilter.client.id == client_id
        @filter = selectedFilter
      end
    end
    @clients = Client.all
  end

end
