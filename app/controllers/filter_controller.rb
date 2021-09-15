class FilterController < ApplicationController
  def show
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
end
