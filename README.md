# Property24 Real Estate App Back-End

## Description
Fully working system that include a robust Node REST API for the property24 apps.
Node.js, or Node, is a runtime environment for executing JavaScript code outside of a browser. It is ideal for building highly-scalable, data-intensive backend services (APIs) that power your client’s apps (web or mobile apps). Node.JS is a brilliant and powerful server side platform that can help developers create backends and server-side applications such as login pages, etc. In our case, I designed a complete Back-End system from scratch that includes:
- Route to add a property
- Route to edit a property
- Route to delete a property
- Route to get all the properties
- Route to get a single property
- Route to Log In and Sign Up
- Working API calls
- Robustness (app working smoothly, bug free, error handling, and handling api call delays)
- Implement an encryption mechanism for the Log In & Sign Up Routes
- Implement Facebook & Google alternative login for authentication

## Required tools:
- NodeJS
- Express
- MongoDB
- Text editor (Atom, Sublime, Brackets, etc...)
- Postman

## List of elemtents covered:
- Download NodeJS
- Create account and Cluster on MongoDB Atlas
- Download Postman
- Create a master Folder name Property24_REST_API - mkdir Property24_REST_API
- Navigate to the root of your newly created folder - cd Property24_REST_API
- Create a package.json file - npm init
- Change start script inside package.json with - "start": "nodemon app.js"
- Create a file called app.js - touch app.js
- Installation of monitoring package - npm i nodemon
- Installation of Express - npm install express
- Installation of doby-parser - npm install express body-parser
- Connect Database
- Create .env files
- Create model schema in mongoose
- Registering a user
- Post and collect data and save them in DB
- Add cors
- Hashing passwords
- Test API endoints with Postman
- Setting up the login route
- Adding jsonwebtokens to our auth
- Creating private routes with JWT
- Authentication Facebook & Google alternative login 

## Getting Started
The following section explains how to make use of the different modules.

### Note
The backend supports the following http methods: 
- POST:  Creates a new resource.
- GET: Provides read-only access to a resource.
- DELETE: Removes a resource.
- PATCH: Updates an existing resource

### Running the App
To start the application follow these steps:
- Clone the repository
- Ensure that you have all pre-requisites
- cd in project folder
- npm start

## API call methods - Test Evidence
### POST Request — For Creating data
![image](https://drive.google.com/uc?id=1gcEXSdsM3h38UqXv7FWOtAtxTi3jki-d)

### PATCH Request — For Updating data
![image](https://drive.google.com/uc?id=1lEz-XhVoQ-QGgs-AKOuEyajyiKyE4k0X)

### GET Request — For Retrieving/Fetching data
![image](https://drive.google.com/uc?id=1i7ovod9-qvIrA10zb7HFcFzXfK5JIzez)

### DELETE Request — For Deleting data
![image](https://drive.google.com/uc?id=1QtGJyE2tipWmFLrw5yNDg-h2EiVnUJUI)
