class FilterController < ApplicationController
  def model
    response.headers.delete "X-Frame-Options"
    clientCode = params[:client]
    filterCode = params[:filter]

    if filterCode && clientCode
      filter = Filter.find_by(:product_code => filterCode)

      if filter && filter.client.code == clientCode
        @filter = filter
      end
    end
  end

  def ar
    response.headers.delete "X-Frame-Options"
    clientCode = params[:client]
    filterCode = params[:filter]
    
    if filterCode && clientCode
      filter = Filter.find_by(:product_code => filterCode)

      if filter && filter.client.code == clientCode
        @filter = filter
      end
    end
  end

  def tester
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
