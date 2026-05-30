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