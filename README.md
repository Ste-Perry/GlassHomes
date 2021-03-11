# glassHouse
 


## Final Large group project
A project to give power back to tenants! Our site allows users to search rental properties and add reviews based on the condition of their home. Inspired by Glassdoor company reviews. 

## The Tech

A Boilerplate is already set up for you (Thanks Harrison!) with everything you will need to get started. This boilerplate is set up to use:

* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* [Bulma (CSS framework)](https://bulma.io/documentation/)
* [JWT Auth (Local)](https://jwt.io/)

The Migration and seeds for the users table, and all login functionality is already set up!

The mobile responsiveness is also being handled by some neat JS and Bulma classes, be sure to incorporate that view in your project goals!


## MVP

#### Home Page

* I want to be able to register, login and logoff my account
* I want to be able to search for properties by address

##### Stretch
* I want to be able to search for properties by suburb 

#### Property page

* I want to be able to see the property details (bathrooms, bedrooms, parking etc)
* I want to be able to add a review 
* I want to be able to update, delete and edit my post
* I want to be able to mark other posts as helpful 
* I want to be able to see reviews in order of helpfulness 

##### Stretch
* I want to see the average score of the property

#### Review

* I want to be able to submit a score out of 5 stars
* I want to be able to add pros and cons
* I want to be able to display my time spent as a tenant at that property (year of tenancy)
* I want my review to display date submitted and author

##### Stretch

* I want to be able to submit images of the property

#### Add a property

* I want to see details such bedrooms, bathrooms, parking
* I want to be able to add an address for the property
* I want to be able to add additional (other) comments 

##### Stretch
* I want to be able to add photos of the property


## Setup

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
cp .env.example .env
```

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
npm run h:deploy
```

Run heroku migrations:
```sh
npm run h:migrate
```

Run heroku seeds:
```sh
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!

