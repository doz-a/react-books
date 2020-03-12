
# Google Books React
My first full stack React application :)

site: https://radiant-refuge-63725.herokuapp.com/


3/11/2020
Version 1

# Basic Use

You can search Google Books API for books. Clicking "save book" will save a book (not working completely yet, adds a test filler information). Books can also be viewed on Google Books by clicking "view". You can add books by navigating to the "Saved" page and filling in the form, then clicking "Submit". Books can be deleted from the database by clicking "delete book from database".

# App Organization
Application was created using my instructor's Node React Startup Structure
https://github.com/anthonyrivas/Node-React-Startup-Structure

### client
1. Components contains the buttons and forms, and jumbotron used to build the pages
2. utils contains the API that handles querying Google Books, as well as deleting and saving books to the database
3. App.js contains routes form the home search page, and the saved books page


### server
1. contains models -> controllers -> routes -> app.js
2. contains dotenv required for accessing mongoLAB without exposing sensitive information

## Technologies used
1. Javascript
2. NodeJS packages
3. GitHub
4. React
5. React Bootstrap
6. dotenv
7. Morgan 
8. MongoLAB DB
9. Google Books API
10. Express

## Developers
1. Miguel Delos Santos

## Future Development
1. Add login for users to save their books
2. Complete saving a book
3. Add more styling

## Motivation
1. A desire to learn how to turn React into a full stack application!

Thanks for reading!

(//)<(0.0)>(//)

3/11/2020