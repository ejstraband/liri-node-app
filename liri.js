require("dotenv").config();

var liriNeeds = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var argument = process.argv[2];
console.log("argument: " + argument);

function myTweets() {
// This will show your last 20 tweets and when they were created at in your terminal/bash window
    console.log("function: " + argument);
}

function spotifyThisSong() {
// This will show the following information about the song in your terminal/bash window
//      * Artist(s)
//      * The song's name
//      * A preview link of the song from Spotify
//      * The album that the song is from
//      * If no song is provided then your program will default to "The Sign" by Ace of Base.
    console.log("function: " + argument);
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
    console.log("function: " + argument);
}

function doWhatItSays() {
// node liri.js do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.
    console.log("function: " + argument);
    if (argument === "myTweets") {
        myTweets();
    } else if (argument === "spotifyThisSong") {
        spotifyThisSong();
    } else if (argument === "movieThis") {
        movieThis();
    }
}

function doWhatItSays();