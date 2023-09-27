/* Selene Munoz (301268109) */

// Imports and Initialize Express
const express = require('express');
const app = express();

// Creates local server to run on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Setting application's templating engine to ejs
app.set("view engine", "ejs");

// Get request for home page
app.get('/', (req, res) => {
    res.render("pages/home");
});

// Get request to about page
app.get('/about', (req, res) => {
    res.render("pages/about");
});

// Get request to contact page
app.get('/contact', (req, res) => {
    res.render("pages/contact");
});

// Get request to projects page
app.get('/projects', (req, res) => {
    res.render("pages/projects");
});

// Get request to services page
app.get('/services', (req, res) => {
    res.render("pages/services");
});