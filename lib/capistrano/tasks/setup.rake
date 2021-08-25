namespace :deploy do
  task :copy_sqlite, roles: :app do
    run "cp #{current_path}/db/production.sqlite3 #{release_path}/db/"
  end
  namespace :check do
    before :linked_files, :set_master_key do
      on roles(:app), in: :sequence, wait: 10 do
        unless test("[ -f #{shared_path}/config/master.key ]")
          upload! 'config/master.key', "#{shared_path}/config/master.key"
        end
      end
    end
  end
end
