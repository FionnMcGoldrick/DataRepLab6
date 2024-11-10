// Enable EXPRESS
const express = require('express');
const app = express();
const port = 4000; // Port number where the server will listen

// Enable CORS (Cross-Origin Resource Sharing)
// This middleware allows your frontend app to communicate with the backend, even if they are on different domains
const cors = require('cors');
app.use(cors()); // Allow all origins by default (use with caution in production environments)

app.use(function (req, res, next) {
    // Custom CORS configuration for finer control over allowed HTTP methods and headers
    res.header("Access-Control-Allow-Origin", "*"); // Allow all origins (use specific origins for better security)
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow the specified HTTP methods
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Allow specific headers
    next(); // Move to the next middleware or route handler
});

// body-parser middleware to parse incoming request bodies
// It is used to handle URL-encoded data (form data) and JSON payloads in the request body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data (for form submissions)
app.use(bodyParser.json()); // Parse JSON data (for REST API requests)

// GET request to fetch movie data from the server
app.get('/api/movies', (req, res) => {
    // Example of movie data stored in a static array (this could come from a database in a real application)
    const movies = [
        {
            "Title": "Avengers: Infinity War (server)", // Movie title
            "Year": "2018", // Release year
            "imdbID": "tt4154756", // IMDb movie ID
            "Type": "movie", // Type of media (could be 'movie', 'series', etc.)
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" // URL to the movie poster image
        },
        {
            "Title": "Captain America: Civil War (server)",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z (server)",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
    ];
    // Respond with the movie data as JSON, with a successful status code (200)
    res.status(200).json({ movies });
});

// POST request to add a new movie
// In this case, the server simply logs the received movie details to the console
app.post("/api/movies", (req, res) => {
    console.log("Movie added!"); // This is a placeholder for the actual logic of adding a movie
    // Optionally, you could respond back to confirm the movie has been added
    res.status(201).send("Movie added successfully!");
});

// Port listener to start the server
// The server listens for incoming requests on the specified port (4000 in this case)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log to the console when the server starts
});
