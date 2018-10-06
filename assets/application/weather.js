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

    // // Note remember to create these same variables in Firebase!
    // var zipcode = "";
    // var date = "";
    
    // Get inputs
    var zipcode = $("#zipcode-input").val().trim();
    var date = $("#date-input").val().trim();

    // Code in the logic for storing and retrieving the most recent user.
    database.ref().push({

        zipcode: zipcode,
        date: date,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});
// Firebase is always watching for changes to the data.
// When changes occurs it will print them to console and html
database.ref().on("child_added", function (snapshot) {

    // Print the initial data to the console.
    console.log(snapshot.val());

    // Log the value of the various properties
    console.log(snapshot.val().zipcode);
    console.log(snapshot.val().date);

    // Change the HTML  // fix this//
    $("#zipcode-input").append(snapshot.val().zipcode);
    $("#date-input").append(snapshot.val().date);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
// dataRef.ref().orderByChild("dataAdded").limitToLast(1).on('child_added", function(snapshot)

//  this is where we pull the data from the api app



function displayweatherInfo() {
    var info = $(this).attr("weather-info");
    var queryURL =
      "api.openweathermap.org/data/2.5/forecast?zip=" + zipcode + ",us";

      $.ajax({
      url: queryURL,
      crossDomain: true,
      method: "GET"
    }).then(function(response) {
      // Saving the data property
      var weather = response.list.;
      console.log(response);


      <div id="openweathermap-widget-11"></div>
      <script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script>
      <script>
      window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
      window.myWidgetParam.push({
          id: 11,cityid: '4684888',appid: '8e5065f407a7e54ac928dfac8cbe0bfd',units: 'metric',containerid: 'openweathermap-widget-11',  
        });  
      (function() {
          var script = document.createElement('script');
          script.async = true;script.charset = "utf-8";
          script.src = 
      "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
      var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();
      </script>