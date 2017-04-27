/*

You are building an app that takes data from GitHub's API and stores it in your database. 
Here is an overview of what you'll need to do:

When a user types in a GitHub username and submits the form, your app should:

Send a POST request to your express server
Your server should GET that user's repos from GitHub's API
Your server should then save the repos to the database
When a user visits / refreshes your page, your app should:

GET the top 25 repos in your express server's database and display them on the page


Basic Requirements:

1 Draw a diagram showing how this app works. 
Make sure your diagram includes the client, the server, and the database.

Explain your diagram to a fellow student, and then to a Tech Mentor or HIR.
x


Design (draw a schema) a repos mongoose schema. You can look at data.json to see the structure of the data from the github api. What properties will you need? Once you've figured out your schema, complete the Repos schema in database/index.js, using the Mongoose Quick Start Guide for help.

Explain your schema to a fellow student, and then to a Tech Mentor or HIR.
x



When a user types a github username into the text field, use jQuery's ajax method to send a POST request to /repos/import (you'll have to fix the bug in the Search Component first).
x



Complete the /repos/import route on your express server - in this route, you'll use the npm request library to fetch that user's Github repositories from the Github API.

Store the data from the Github API in the mongo database.

Ensure there are no duplicate repos. If you happen to import the same repo twice, it should only show up once in your database. See the tips section about considering unique columns.
Write a GET /repos endpoint that retrieves the top 25 repos stored in your database, sorted by the criteria you decided on earlier.

Refactor the client so that when the page loads, the top 25 repos are displayed on the page.

Make each repo's name in the table link to that repo's page on GitHub.

After entering a github handle in the form, update the page with the latest top 25 without requiring a page refresh.

Make sure there are no duplicates.
Complete Getting Started with NodeJS on Heroku

After completing all of the above requirements, demo your app to a Tech Mentor or HIR.

DO NOT MOVE ON TO ADANCED CONTENT UNTIL YOU HAVE DEMOED YOUR APP!



*/