## jira_client_app

This is a simple Ruby on rails app which creates issues on Jira using its api

### Prerequisites
* ruby 2.3.1
* nodejs
* Redis

### Setup/ Development
* Run `bundle install`
* Run `bundle exec rake db:setup`
* Run `cd client && npm install`
* cd back to home and Run `foreman start -f Procfile.dev`

### Testing
* Run `bundle install`
* Run `RAILS_ENV=test bundle exec rake db:setup`
* Run `bundle exec rspec`


### Libraries & Frameworks used
* Ruby on rails with sqlite for backend and rspec for unit testing
* React with Redux for frontend and webpack for bundling assets
* Faraday gem for Jira Rest Api client wrapper
* Sidekiq for asynchronous background job
* Bootstrap for styling
