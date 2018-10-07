// Initialize Firebase
var config = {
    apiKey: "AIzaSyAno_Lj1JInIRz89IGUAMYqaElUD-zKBIE",
    authDomain: "api-project-1-1538239416627.firebaseapp.com",
    databaseURL: "https://api-project-1-1538239416627.firebaseio.com",
    projectId: "api-project-1-1538239416627",
    storageBucket: "",
    messagingSenderId: "205626442574"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Capture Button Click
$("#search-event").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();

    // Get inputs
    var zipcode = $("#zipcode-input").val().trim();
    var date = $("#date-input").val().trim();
    var data = "";

    // should get the data from the weather app
    function displayWeatherInfo() {
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zipcode + ",us&APPID=8e5065f407a7e54ac928dfac8cbe0bfd"  
                                     
        console.log(queryURL)

        $.ajax({
            url: queryURL,
            crossDomain: true,
            method: "GET"
        }).then(function (response) {
                data = response.list.main_temp;
                console.log(data);
        }
        )};
    // Code in the logic for storing and retrieving the most recent user.
    database.ref().push({

        zipcode: zipcode,
        date: date,
        data: data,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    }); 
    displayWeatherInfo();
});
// Firebase is always watching for changes to the data.
// When changes occurs it will print them to console and html
database.ref().on("child_added", function (snapshot) {

    // Print the initial data to the console.
    console.log(snapshot.val());

    // Log the value of the various properties
    console.log(snapshot.val().zipcode);
    console.log(snapshot.val().date);
    console.log(snapshot.val().data);

    // Change the HTML  // fix this//
    $("#zipcode-input").append(snapshot.val().zipcode);
    $("#date-input").append(snapshot.val().date);
    $("#openweathermap-data").append(snapshot.val().data);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
// dataRef.ref().orderByChild("dataAdded").limitToLast(1).on('child_added", function(snapshot)

//  this is where we pull the data from the api app