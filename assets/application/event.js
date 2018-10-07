var config = {
  apiKey: "AIzaSyAno_Lj1JInIRz89IGUAMYqaElUD-zKBIE",
  authDomain: "api-project-1-1538239416627.firebaseapp.com",
  databaseURL: "https://api-project-1-1538239416627.firebaseio.com",
  projectId: "api-project-1-1538239416627",
  storageBucket: "api-project-1-1538239416627.appspot.com",
  messagingSenderId: "205626442574"
};
firebase.initializeApp(config);

  var database = firebase.database();
//Button event to initialize search
  $("#search-event").on("click", function (event){

//sets variables  to user input 
    var eventFind = $("#find-input").val().trim();
    var eventDate = $("#date-input").val().trim();
    var eventZip = $("#zipcode-input").val().trim();

    console.log(eventFind);

//pushes data to firebase
    var newEvent = {
        keyword: eventFind,
        date: eventDate,
        zipcode: eventZip
    };

  database.ref().push(newEvent);

  console.log(newEvent.keyword);
  console.log(newEvent.date);
  console.log(newEvent.zipcode);

  function displayeventInfo() {
    var queryURL ="http://api.eventful.com/rest/events/search?...&keywords=books&location=San+Diego&date=Future";
     
      $.ajax({
      url: queryURL,
      crossDomain: true,
      method: "GET"
    }).then(function(response) {
      var eventfuls = response.events.title;
      console.log(eventfuls);

    }
    )};

displayeventInfo();
  
});



database.ref().on("child_added", function( childSnapshot, prevChildKey){

console.log(childSnapshot.val());

var eventFind = childSnapshot.val().keyword;
var eventDate = childSnapshot.val().date;
var eventZip = childSnapshot.val().zipcode;

console.log(eventFind);
console.log(eventDate);
console.log(eventZip);

})


