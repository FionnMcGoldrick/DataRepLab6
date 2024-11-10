import React from 'react';
import Movies from './Movies'; // Importing the Movies component to display the fetched movies
import axios from 'axios'; // Importing axios for making HTTP requests
import { useEffect } from 'react'; // Importing the useEffect hook to run side-effects in the component
import { useState } from 'react'; // Importing the useState hook to manage state in the component

// Read Component: Fetches movie data from the server and passes it to the Movies component
const Read = () => {
    // useState hook to initialize and manage the movies array in the component's state
    const [movies, setMovies] = useState([]); // Initial state is an empty array

    // useEffect hook: Runs when the component is mounted or updated (here it runs only once due to [])
    useEffect(() => {
        // Sending a GET request to the backend API to fetch movie data
        axios.get("http://localhost:4000/api/movies")
            .then((response) => { 
                // When data is received, log it to the console for debugging
                console.log(response.data); 
                // Update the state with the movie data received from the API
                setMovies(response.data.movies); 
            })
            .catch((error) => {
                // Handle error if the request fails
                console.error("Error fetching movies: ", error);
            });
    }, []); // Empty dependency array means this effect runs only once after the component mounts

    // Render the component UI: Displays a title and the Movies component with fetched data
    return (
        <div>
            <h3>Hello from the Read component</h3>  {/* Heading */}
            <Movies myMovies={movies} /> {/* Pass the fetched movies array as a prop to Movies component */}
        </div>
    );
}

export default Read; // Export the Read component so it can be used elsewhere in the app
