eventFind = "";
     eventDate = "";
     eventZip = "";

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
    event.preventDefault();

//sets variables  to user input 
     eventFind = $("#find-input").val().trim();
    //  eventDate = $("#date-input").val().trim();
     eventZip = $("#zipcode-input").val().trim();

    

//pushes data to firebase
database.ref().set({
  keyword: eventFind,
  zipcode: eventZip
});
  


database.ref().on("value", function(snapshot){

  eventFind = snapshot.val().keyword;
  eventZip = snapshot.val().zipcode;
 });
console.log(eventZip);
console.log(eventFind);

var oArgs = {
 app_key: "HHnGr5bXXXFGjzZW",
 location: eventZip,
 q: eventFind,
//  "date": "Future",
 "include": "tags,categories",
 page_size: 5,
 sort_order: "popularity",
};
EVDB.API.call("/events/search", oArgs, function(oData) {
 console.log(oData);
 
 for (var i=0; i < 3; i++){

  var picURL = oData.events.event[i].image.medium.url;
  var venURL = oData.events.event[i].venue_url
  console.log(venURL);
  var picTure = $("<img>").attr("src", picURL);
  var titleURL = oData.events.event[i].title;
  var newCol = $("<div>").attr("class", "col-lg-3 linked");
  var newRow = $("<a>").attr("class", "row");
$("#event-data").append(newCol);
$(newCol).append(newRow);
 $(newRow).append(picTure);
 $(newCol).append(newRow);
 $(newRow).append(titleURL);
 $(newCol).append(newRow);
 $(newRow).append(" Venue Link For Tickets Here").attr("href", `${venURL}`);

  
 }


 });

 
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + eventZip + ",us&APPID=8e5065f407a7e54ac928dfac8cbe0bfd";

        console.log(weatherURL);

        $.ajax({
            url: weatherURL,
            crossDomain: true,
            method: "GET"
        }).then(function (response) {
           var data = response.list[0].main.temp;
           var skies = response.list[0].weather[0].description;
           actTemp = Math.floor(((data - 273.15) * 1.8) + 32);
            console.log(actTemp);
            console.log(skies);
            var eventWeather = $("<div>").html("It is " + actTemp + " degrees outside. And it looks like "+ skies + ". Choose accodingly!");
  $("#weather-status").append(eventWeather);
        })

        
});





