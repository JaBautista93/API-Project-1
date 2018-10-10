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
     eventDate = $("#date-input").val().trim();
     eventZip = $("#zipcode-input").val().trim();
     console.log(eventZip);

    

//pushes data to firebase
  //   var newEvent = {
  //       keyword: eventFind,
  //       date: eventDate,
  //       zipcode: eventZip
  //   };

  // database.ref().push(newEvent);

  // console.log(newEvent.keyword);
  // console.log(newEvent.date);
  // console.log(newEvent.zipcode);
database.ref().set({
  keyword: eventFind,
  zipcode: eventZip
});
  

console.log(eventZip);

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
 "date": "Future",
 "include": "tags,categories",
 page_size: 5,
 sort_order: "popularity",
};
EVDB.API.call("/events/search", oArgs, function(oData) {
 console.log(oData);
 console.log(oData.events.event[0].image);
 var picURL = oData.events.event[0].image.medium.url;
 var picTure = $("<img>").attr("src", picURL);
 var titleURL = oData.events.event[0].title;
$("#event-data").append(picTure);
$("#event-data").append(titleURL);
 });
  
});





