// =====================================
// JavaScript Basics & Setup
// =====================================

console.log("Welcome to the Community Portal");

window.onload = function () {

    alert("Welcome to the Community Portal");

};
// =====================================
// Syntax, Data Types and Operators
// =====================================

// const variables
const eventName = "Technology Workshop";

const eventDate = "2026-06-15";

// let variable
let availableSeats = 50;

// Template Literal
document.getElementById("eventInfo").innerHTML =
    `Event Name: ${eventName}<br>
     Event Date: ${eventDate}<br>
     Available Seats: ${availableSeats}`;

// Function to register a seat
function registerSeat() {

    if (availableSeats > 0) {

        availableSeats--;

        document.getElementById("seatCount").innerHTML =
            `Remaining Seats: ${availableSeats}`;

        console.log(
            `Seat Registered. Remaining Seats: ${availableSeats}`
        );

    } else {

        document.getElementById("seatCount").innerHTML =
            "No Seats Available";

    }
}
// =====================================
// Conditionals, Loops and Error Handling
// =====================================

const events = [

    {
        name: "Technology Workshop",
        seats: 25,
        isUpcoming: true
    },

    {
        name: "Health Camp",
        seats: 0,
        isUpcoming: true
    },

    {
        name: "Cultural Festival",
        seats: 50,
        isUpcoming: false
    }

];

let eventDisplay = "";

events.forEach(function(event) {

    // if-else condition

    if(event.isUpcoming && event.seats > 0) {

        eventDisplay +=
            `<p>
                ${event.name}
                (Seats Available:
                ${event.seats})
            </p>`;
    }

    else {

        console.log(
            `${event.name}
            is not available`
        );
    }

});

document.getElementById("eventList")
.innerHTML = eventDisplay;


// Registration Logic using try-catch

function registerForEvent() {

    try {

        let selectedEvent = events[0];

        if(selectedEvent.seats <= 0) {

            throw new Error(
                "No seats available"
            );
        }

        selectedEvent.seats--;

        document.getElementById(
            "registrationStatus"
        ).innerHTML =

        `Successfully Registered!
         Remaining Seats:
         ${selectedEvent.seats}`;

    }

    catch(error) {

        document.getElementById(
            "registrationStatus"
        ).innerHTML =

        error.message;

        console.error(error);
    }
}