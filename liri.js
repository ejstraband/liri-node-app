require("dotenv").config();

var request = require("request");

var liriNeeds = require("./keys.js");

// commented out to work on the movie search
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

var functionOperation = process.argv[2];
console.log("function selected: " + functionOperation);

var searchTerm = process.argv[3];
console.log("Search Term: " + searchTerm);

function myTweets() {
// This will show your last 20 tweets and when they were created at in your terminal/bash window
    console.log("function: myTweets");
}

function spotifyThisSong() {
// This will show the following information about the song in your terminal/bash window
//      * Artist(s)
//      * The song's name
//      * A preview link of the song from Spotify
//      * The album that the song is from
//      * If no song is provided then your program will default to "The Sign" by Ace of Base.
    console.log("function: spotifyThisSong");
}

function movieThis() {
// This will output the following information to your terminal/bash window:
//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
    console.log("function: movieThis");
    console.log("selected movie is: " + searchTerm);

    var movieSearchString = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy"
    console.log(movieSearchString);

    request(movieSearchString, function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's title is: " + JSON.parse(body).Title);
    console.log("The movie's year is: " + JSON.parse(body).Released);
    console.log("The movie's IMDB rating is: " + JSON.parse(body).imdbRating);
    // console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).Rotten\ Tomatoes);
    console.log("The movie's Country of Origin is: " + JSON.parse(body).Country);
    console.log("The movie's Language is: " + JSON.parse(body).Language);
    console.log("The movie's Plot is: " + JSON.parse(body).Plot);
    console.log("The movie's Actors are: " + JSON.parse(body).Actors);
  }
});
}

function doWhatItSays() {
// node liri.js do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.
    console.log("function: do what is says");
    if (functionOperation === "myTweets") {
        myTweets();
    } else if (functionOperation === "spotifyThisSong") {
        spotifyThisSong();
    } else if (functionOperation === "movieThis") {
        movieThis();
    }
}

doWhatItSays();