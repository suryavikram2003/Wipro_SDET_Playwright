// ## Question 3: The Movie Stream Analytics

// **Problem Statement:**

// You are given an array of raw strings representing movie data from a streaming platform. You need to convert this raw data into a structured format to identify top-performing content.

// **Requirements:**

// 1.  Parse strings formatted as: "MOVIE_NAME|GENRE|VIEW_COUNT".

// 2.  Convert each string into an object with properties for name, genre, and views.

// 3.  Ensure the views property is an actual Number. If the views data is corrupted or not a number, default it to 0.

// 4.  Create a new list containing only movies from the "Action" or "Sci-Fi" genres with more than 5,000 views.

// 5.  Sort the final list by views in descending order (highest views first).

// 6.  Return the final array as a JSON string.

// **Input Data Example:**

// ```javascript
// const rawMovies = [
//   "Inception|Sci-Fi|12000",

//   "The Lion King|Animation|8000",

//   "Mad Max|Action|invalid",

//   "The Matrix|Sci-Fi|15000",

//   "Gladiator|Action|4500",
// ];
const rawMovies = [
    "Inception|Sci-Fi|12000",
    "The Lion King|Animation|8000",
    "Mad Max|Action|invalid",
    "The Matrix|Sci-Fi|15000",
    "Gladiator|Action|4500"
];

function analyzeMovies(movies) {

  
    const parsedMovies = movies.map(movie => {

        const [name, genre, views] = movie.split('|');

        let viewcount = Number(views);

        if (isNaN(viewcount)) {
            viewcount = 0;
        }

        return {
            name,
            genre,
            viewcount
        };
    });

    const filteredMovies = parsedMovies.filter(movie =>
        (movie.genre === "Action" || movie.genre === "Sci-Fi") &&movie.viewcount > 5000);

    filteredMovies.sort((a, b) => b.viewcount - a.viewcount);
    return JSON.stringify(filteredMovies, null, 2);
}

// Function call
const result = analyzeMovies(rawMovies);

console.log(result);