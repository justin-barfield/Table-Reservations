// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  Du
// =============================================================
var reservation = [
  {
    customerName: "Person 1",
    phoneNumber: "555 555 5555",
    customerEmail: "person1@mail.com",
    customerID: 900
  },
  {
    customerName: "Person 2",
    phoneNumber: "555 664 3434",
    customerEmail: "person2@email.com",
    customerID: 49
  }
];

// Collect Info
// =============================================================
   var queryURL = "localhost:3000/reservations/tables";
   var data ;
   // on click submit

   // add the reservation to the array
   $('#submit').click(function(){
       data.customerName = $('#customerName').val();
       data.phoneNumber = $('#phoneNumber').val();
       data.customerEmail = $('#customerEmail').val();
       data.customerID = $('#customerID').val();

       // post the user input data to the server
       app.post(queryURL, data, function(){
           reservation.push(data);
       });
   })

   $("#view").click(function(){
        view();
   });

function view() {
    app.get("/reservations", function(req, res) {
        return res.json(reservation);
       
      
});
};







// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all reservations
// app.get("/reservations", function(req, res) {
//   return res.json(reservation);


// Create New Characters - takes in JSON input
app.post("/reservations/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservation.push(newReservation);

  res.json(newReservation);

  module.exports{
      
  }
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
