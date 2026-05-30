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
// =====================================
// Functions, Scope, Closures,
// Higher Order Functions
// =====================================

// Event Array

let communityEvents = [

    {
        name: "Technology Workshop",
        category: "Workshop"
    },

    {
        name: "Health Camp",
        category: "Health"
    },

    {
        name: "Coding Workshop",
        category: "Workshop"
    }

];


// Function 1 - Add Event

function addEvent() {

    communityEvents.push({

        name: "Sports Meet",

        category: "Sports"

    });

    document.getElementById(
        "functionOutput"
    ).innerHTML =

    "Sports Meet Added Successfully";

    console.log(
        "Sports Meet Added"
    );
}


// Function 2 - Register User

function registerUser() {

    let totalRegistrations =
        registrationCounter();

    let currentCount =
        totalRegistrations();

    document.getElementById(
        "functionOutput"
    ).innerHTML =

    `Total Registrations:
     ${currentCount}`;
}


// Closure

function registrationCounter() {

    let count = 0;

    return function() {

        count++;

        return count;
    };
}


// Create One Global Counter

const totalRegistrationTracker =
    registrationCounter();


// Updated Registration Function

function registerUser() {

    let count =
        totalRegistrationTracker();

    document.getElementById(
        "functionOutput"
    ).innerHTML =

    `Total Registrations:
     ${count}`;
}


// Function 3 - Filter Events

function filterEventsByCategory(
    category,
    callback
) {

    let filteredEvents =

        communityEvents.filter(

            event =>

            event.category === category

        );

    callback(filteredEvents);
}


// Callback Function

function displayEvents(events) {

    let output = "";

    events.forEach(event => {

        output +=

        `<p>
            ${event.name}
         </p>`;

    });

    document.getElementById(
        "filterOutput"
    ).innerHTML = output;
}


// Dynamic Search

function showWorkshopEvents() {

    filterEventsByCategory(

        "Workshop",

        displayEvents

    );
}
// =====================================
// Objects and Prototypes
// =====================================

// Event Class

class Event {

    constructor(name, date, seats) {

        this.name = name;

        this.date = date;

        this.seats = seats;
    }
}


// Prototype Method

Event.prototype.checkAvailability =
function() {

    if(this.seats > 0) {

        return "Seats Available";
    }

    return "Event Full";
};


// Create Event Object

const techEvent = new Event(

    "Technology Workshop",

    "2026-06-15",

    50

);


// Display Event Details

function showEventDetails() {

    let output =

        `<h4>Event Information</h4>`;

    // Object.entries()

    Object.entries(techEvent)

    .forEach(([key, value]) => {

        output +=

        `<p>

            <strong>${key}</strong> :

            ${value}

         </p>`;
    });

    output +=

        `<p>

            <strong>Status:</strong>

            ${techEvent.checkAvailability()}

         </p>`;

    document.getElementById(
        "objectOutput"
    ).innerHTML = output;

    console.log(
        Object.entries(techEvent)
    );
}
// =====================================
// Arrays and Methods
// =====================================

// Event Array

let eventArray = [

    {
        name: "Music Concert",
        category: "Music"
    },

    {
        name: "Technology Workshop",
        category: "Workshop"
    },

    {
        name: "Music Festival",
        category: "Music"
    }

];


// .push() Example

function addCommunityEvent() {

    eventArray.push({

        name: "Sports Meet",

        category: "Sports"

    });

    document.getElementById(
        "arrayOutput"
    ).innerHTML =

    "<p>Sports Meet Added Successfully!</p>";

    console.log(eventArray);
}


// .filter() Example

function showMusicEvents() {

    let musicEvents =

        eventArray.filter(

            event =>

            event.category === "Music"

        );

    let output =

        "<h4>Music Events</h4>";

    musicEvents.forEach(event => {

        output +=

        `<p>${event.name}</p>`;

    });

    document.getElementById(
        "arrayOutput"
    ).innerHTML = output;
}


// .map() Example

function showFormattedEvents() {

    let formattedEvents =

        eventArray.map(

            event =>

            `Workshop on ${event.name}`

        );

    let output =

        "<h4>Formatted Event Cards</h4>";

    formattedEvents.forEach(event => {

        output +=

        `<div class="eventCard">

            ${event}

         </div>`;

    });

    document.getElementById(
        "arrayOutput"
    ).innerHTML = output;
}
// =====================================
// DOM Manipulation
// =====================================

// Event Data

const domEvents = [

    {
        name: "Technology Workshop"
    },

    {
        name: "Health Camp"
    },

    {
        name: "Sports Meet"
    }

];


// Display Events

function displayEvents() {

    // querySelector()

    const container =

        document.querySelector(
            "#domEventContainer"
        );

    // Clear Existing Content

    container.innerHTML = "";

    // createElement()

    domEvents.forEach(event => {

        const card =

            document.createElement("div");

        card.className =
            "eventCard";

        card.innerHTML =

            `<h4>${event.name}</h4>`;

        // appendChild()

        container.appendChild(card);

    });

}


// Register Event

function registerEvent() {

    document.querySelector(
        "#domStatus"
    ).innerHTML =

    "Successfully Registered!";

}


// Cancel Event

function cancelEvent() {

    document.querySelector(
        "#domStatus"
    ).innerHTML =

    "Registration Cancelled";

}
// =====================================
// Event Handling
// =====================================

const eventCategories = [

    {
        name: "Technology Workshop",
        category: "Workshop"
    },

    {
        name: "Health Camp",
        category: "Health"
    },

    {
        name: "Sports Meet",
        category: "Sports"
    }

];


// onclick Example

function registerCommunityEvent() {

    document.getElementById(
        "registerMessage"
    ).innerHTML =

    "Successfully Registered for Event!";

}


// onchange Example

function filterCategory() {

    const selectedCategory =

        document.getElementById(
            "categoryFilter"
        ).value;

    let output = "";

    let filteredEvents =

        eventCategories.filter(event =>

            selectedCategory === "All"

            ||

            event.category === selectedCategory

        );

    filteredEvents.forEach(event => {

        output +=

        `<p>
            ${event.name}
         </p>`;

    });

    document.getElementById(
        "categoryOutput"
    ).innerHTML = output;
}


// keydown Example

function searchEvent() {

    let keyword =

        document.getElementById(
            "searchBox"
        ).value.toLowerCase();

    let result =

        eventCategories.filter(event =>

            event.name
            .toLowerCase()
            .includes(keyword)

        );

    let output = "";

    result.forEach(event => {

        output +=

        `<p>
            ${event.name}
         </p>`;

    });

    document.getElementById(
        "searchOutput"
    ).innerHTML = output;
}
// =====================================
// Async JS, Promises, Async/Await
// =====================================


// Show Loading Spinner

function showLoading() {

    document.getElementById(
        "loadingSpinner"
    ).innerHTML =

    "<h4>Loading...</h4>";
}


// Hide Loading Spinner

function hideLoading() {

    document.getElementById(
        "loadingSpinner"
    ).innerHTML = "";
}


// =====================================
// FETCH USING .then() AND .catch()
// =====================================
// =====================================
// Modern JavaScript Features
// =====================================

// const and let

const modernEvents = [

    {
        name: "Technology Workshop",
        category: "Workshop",
        seats: 50
    },

    {
        name: "Music Festival",
        category: "Music",
        seats: 100
    },

    {
        name: "Health Camp",
        category: "Health",
        seats: 30
    }

];


// Default Parameter Function

function getEventInfo(
    eventName = "Community Event"
) {

    return `Event Name: ${eventName}`;
}


// Display Modern Features

function showModernFeatures() {

    let output = "";

    // Default Parameter

    output +=
        `<h4>Default Parameter</h4>
         <p>
            ${getEventInfo()}
         </p>`;


    // Destructuring

    const {

        name,

        category,

        seats

    } = modernEvents[0];

    output +=
        `<h4>Destructuring Example</h4>

         <p>
            Name: ${name}
         </p>

         <p>
            Category: ${category}
         </p>

         <p>
            Seats: ${seats}
         </p>`;


    // Spread Operator

    const clonedEvents =

        [...modernEvents];

    const filteredEvents =

        clonedEvents.filter(

            event =>

            event.category === "Music"

        );

    output +=
        `<h4>Spread Operator + Filter</h4>`;

    filteredEvents.forEach(event => {

        output +=

        `<p>
            ${event.name}
         </p>`;

    });

    document.getElementById(
        "modernOutput"
    ).innerHTML = output;

    console.log(
        "Cloned Events:",
        clonedEvents
    );
}
function fetchEventsUsingThen() {

    showLoading();

    fetch(
        "https://jsonplaceholder.typicode.com/users"
    )

    .then(response => {

        return response.json();

    })

    .then(data => {

        hideLoading();

        let output =

            "<h4>Events Loaded Using .then()</h4>";

        data.slice(0,5).forEach(user => {

            output +=

            `<p>
                ${user.name}
             </p>`;

        });

        document.getElementById(
            "asyncOutput"
        ).innerHTML = output;

    })

    .catch(error => {

        hideLoading();

        document.getElementById(
            "asyncOutput"
        ).innerHTML =

        "Error Loading Data";

        console.error(error);

    });

}


// =====================================
// FETCH USING ASYNC/AWAIT
// =====================================

async function fetchEventsAsync() {

    try {

        showLoading();

        const response =

            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        const data =
            await response.json();

        hideLoading();

        let output =

            "<h4>Events Loaded Using Async/Await</h4>";

        data.slice(0,5).forEach(user => {

            output +=

            `<p>
                ${user.name}
             </p>`;

        });

        document.getElementById(
            "asyncOutput"
        ).innerHTML = output;

    }

    catch(error) {

        hideLoading();

        document.getElementById(
            "asyncOutput"
        ).innerHTML =

        "Error Loading Data";

        console.error(error);

    }

}
// =====================================
// Working with Forms
// =====================================

document
.getElementById(
    "registrationForm"
)
.addEventListener(

    "submit",

    function(event) {

        // Prevent Default Form Submission

        event.preventDefault();

        // Clear Previous Errors

        document.getElementById(
            "nameError"
        ).innerHTML = "";

        document.getElementById(
            "emailError"
        ).innerHTML = "";

        document.getElementById(
            "eventError"
        ).innerHTML = "";

        // form.elements

        const form =

            event.target;

        const name =

            form.elements[
                "userName"
            ].value;

        const email =

            form.elements[
                "userEmail"
            ].value;

        const selectedEvent =

            form.elements[
                "eventName"
            ].value;

        let isValid = true;

        // Name Validation

        if(name.trim() === "") {

            document.getElementById(
                "nameError"
            ).innerHTML =

            "Name is required";

            isValid = false;
        }

        // Email Validation

        if(email.trim() === "") {

            document.getElementById(
                "emailError"
            ).innerHTML =

            "Email is required";

            isValid = false;
        }

        // Event Validation

        if(selectedEvent === "") {

            document.getElementById(
                "eventError"
            ).innerHTML =

            "Please select an event";

            isValid = false;
        }

        // Success

        if(isValid) {

            document.getElementById(
                "formOutput"
            ).innerHTML =

            `<h4>

                Registration Successful

             </h4>

             <p>

                Name:
                ${name}

             </p>

             <p>

                Email:
                ${email}

             </p>

             <p>

                Event:
                ${selectedEvent}

             </p>`;
        }

    }

);
// =====================================
// AJAX & Fetch API
// =====================================

// =====================================
// Debugging and Testing
// =====================================

function submitRegistration() {

    console.log(
        "Registration process started"
    );

    const registrationData = {

        name: "Hema Priya",

        email: "hema@gmail.com",

        event: "Technology Workshop"

    };

    console.log(
        "Registration Data:",
        registrationData
    );

    document.getElementById(
        "ajaxStatus"
    ).innerHTML =

    "<h4>Sending Registration...</h4>";

    setTimeout(() => {

        console.log(
            "Sending Fetch Request..."
        );

        fetch(
            "https://jsonplaceholder.typicode.com/posts",

            {

                method: "POST",

                headers: {

                    "Content-Type":
                    "application/json"

                },

                body: JSON.stringify(
                    registrationData
                )

            }

        )

        .then(response => {

            console.log(
                "Response Received:",
                response
            );

            if(!response.ok) {

                throw new Error(
                    "Registration Failed"
                );
            }

            return response.json();

        })

        .then(data => {

            console.log(
                "Response Data:",
                data
            );

            document.getElementById(
                "ajaxStatus"
            ).innerHTML =

            `<h4 style="color:green;">
                Registration Successful!
             </h4>

             <p>
                Registration ID:
                ${data.id}
             </p>`;

        })

        .catch(error => {

            console.error(
                "Error:",
                error
            );

            document.getElementById(
                "ajaxStatus"
            ).innerHTML =

            `<h4 style="color:red;">
                Registration Failed
             </h4>`;
        });

    }, 2000);

}