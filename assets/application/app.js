var APIKey = "166a433c57516f51dfab1f7edaed8413";
var dayMessage = [];
var maxTemp = [];
var minTemp = [];
var windSpeed = [];
var zipcode = $("#zipcode-input").val().trim();
var weatherEvent = [];
// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyAno_Lj1JInIRz89IGUAMYqaElUD-zKBIE",
//     authDomain: "api-project-1-1538239416627.firebaseapp.com",
//     databaseURL: "https://api-project-1-1538239416627.firebaseio.com",
//     projectId: "api-project-1-1538239416627",
//     storageBucket: "",
//     messagingSenderId: "205626442574"
// };
//firebase.initializeApp(config);
// Create a variable to reference the database
//var database = firebase.database();
// Capture Button Click

console.log(zipcode);