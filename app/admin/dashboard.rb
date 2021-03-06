ActiveAdmin.register_page "Dashboard" do
  menu priority: 1, label: proc { I18n.t("active_admin.dashboard") }

  content title: proc { I18n.t("active_admin.dashboard") } do
    columns do 

      column do 
        panel "Lastest Filters" do
          table_for Filter.last(5).each do
            column "Filter" do |filter|
              link_to "#{filter.name}", admin_filter_path(filter)
            end
            column :description
            column :client
            column :product_code
          end
        end
      end
      column do 
        panel "Lastest Clients" do
          table_for Client.last(5).each do
            column "Filter" do |client|
              link_to "#{client.name}", admin_client_path(client)
            end
            column :description
            column :code
          end
        end
      end
      column max_width: "300px" do
        panel "Latest filter" do
          Filter.last(1).each do |filter|
            div do
              render 'partials/model-viewer', {filter: filter}
            end
            div do
              link_to "#{filter.name}", admin_filter_path(filter)
            end
          end
        end
      end
    end

    # columns do
    #   column do
    #     panel "Recent Posts" do
    #       ul do
    #         Post.recent(5).map do |post|
    #           li link_to(post.title, admin_post_path(post))
    #         end
    #       end
    #     end
    #   end

    #   column do
    #     panel "Info" do
    #       para "Welcome to ActiveAdmin."
    #     end
    #   end
    # end
  end # content
end
