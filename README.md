# Peninsula Vacation Rentals

A single-page Mern App for a vacation property rental business(build in progress)
[Check out the app>](https://peninsulavacationrentals.herokuapp.com/)

![Screen1](rental/assets/images/screenshot.png)


## Index
1. Problem it solves
2. How it works
3. Instructions
4. Built with

## Problem it solves
Managing even a small number of properties means spending thousands of dollars in fees to bigger rental sites like Homeaway or VRBO. Manage 10 or more properties and that cost could be over 10k annually - an unfeasible cost for small business owners. This app will allow that small business owner to dramatically reduce that expenditure, AND will allow the business to grow. 

## How it works
The app uses React on the Front-end with Node.js, Express and a Mongo database on the back end. Api calls load property data to browsing pages, then that data is passed as props down to a property page component that renders data and a calendar that allows the user to select reservation dates. 

Future updates will include more robust confirmation emails, and api call for current weather conditions, google maps, and functionality to allow for different fees.

## Instructions
(Once it's finished) Use the app like you would any property booking site; find a property you'd like to stay at, choose dates, and checkout. Don't forget sunscreen. 

If you'd like to setup a local copy, fork this repo and clone it to your computer; load that entire folder into VS Code (or your preferred editor), and from that directory, run  
```sh
npm i
``` 
(this assumes you have a current version of Node and NPM installed) to install the packages and dependencies(in this case: mongoose, express, axios and react-dates). [Install Mongo>](https://docs.mongodb.com/manual/installation/) and start a Mongo database. Finally, edit the server.js file with your local database credentials.  


## Built with
* [Node](https://nodejs.org/en/) - Asynchronous, single-threaded js runtime environment
* [React](https://reactjs.org/) - A Javascript library for building user interfaces

### npm packages
* [express](https://www.npmjs.com/package/express) - API framework
* [Mongoose](https://www.npmjs.com/package/mongoose) - node.js driver for Mongo databases
* [axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [react-dates](https://www.npmjs.com/package/react-dates) - An accessible, mobile-friendly datepicker library for the web.