// =====================================
// EXERCISE 1
// JavaScript Basics & Setup
// =====================================

console.log("Welcome to the Community Portal");

window.onload = function () {

    alert("Welcome to the Community Portal");

};


// =====================================
// EXERCISE 2
// Data Types and Operators
// =====================================

const eventName = "Technology Workshop";

const eventDate = "2026-06-15";

let availableSeats = 50;

function loadEventInfo() {

    const eventInfo =
        document.getElementById(
            "eventInfo"
        );

    if (eventInfo) {

        eventInfo.innerHTML =

            `Event Name: ${eventName}<br>
             Event Date: ${eventDate}<br>
             Available Seats: ${availableSeats}`;
    }
}

function registerSeat() {

    if (availableSeats > 0) {

        availableSeats--;

        document.getElementById(
            "seatCount"
        ).innerHTML =

            `Remaining Seats:
             ${availableSeats}`;

    }

    else {

        document.getElementById(
            "seatCount"
        ).innerHTML =

            "No Seats Available";
    }
}


// =====================================
// EXERCISE 3
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

function loadEvents() {

    let eventDisplay = "";

    events.forEach(function (event) {

        if (
            event.isUpcoming &&
            event.seats > 0
        ) {

            eventDisplay +=

                `<p>
                    ${event.name}
                    (Seats:
                    ${event.seats})
                 </p>`;
        }

    });

    const eventList =
        document.getElementById(
            "eventList"
        );

    if (eventList) {

        eventList.innerHTML =
            eventDisplay;
    }
}

function registerForEvent() {

    try {

        let selectedEvent =
            events[0];

        if (
            selectedEvent.seats <= 0
        ) {

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

    catch (error) {

        document.getElementById(
            "registrationStatus"
        ).innerHTML =

            error.message;
    }
}


// =====================================
// EXERCISE 4
// Functions, Closures,
// Higher Order Functions
// =====================================

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

function addEvent() {

    communityEvents.push({

        name: "Sports Meet",

        category: "Sports"

    });

    document.getElementById(
        "functionOutput"
    ).innerHTML =

        "Sports Meet Added Successfully";
}


// Closure

function registrationCounter() {

    let count = 0;

    return function () {

        count++;

        return count;
    };
}

const totalRegistrationTracker =
    registrationCounter();

function registerUser() {

    const count =
        totalRegistrationTracker();

    document.getElementById(
        "functionOutput"
    ).innerHTML =

        `Total Registrations:
         ${count}`;
}


// Higher Order Function

function filterEventsByCategory(
    category,
    callback
) {

    const filteredEvents =

        communityEvents.filter(

            event =>

                event.category ===
                category

        );

    callback(filteredEvents);
}

function displayFilteredEvents(
    events
) {

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

function showWorkshopEvents() {

    filterEventsByCategory(

        "Workshop",

        displayFilteredEvents

    );
}


// =====================================
// EXERCISE 5
// Objects and Prototypes
// =====================================

class Event {

    constructor(
        name,
        date,
        seats
    ) {

        this.name = name;

        this.date = date;

        this.seats = seats;
    }
}

Event.prototype.checkAvailability =
    function () {

        if (
            this.seats > 0
        ) {

            return
                "Seats Available";
        }

        return "Event Full";
    };

const techEvent =
    new Event(

        "Technology Workshop",

        "2026-06-15",

        50

    );

function showEventDetails() {

    let output =

        "<h4>Event Information</h4>";

    Object.entries(
        techEvent
    )

        .forEach(

            ([key, value]) => {

                output +=

                    `<p>

                        <strong>
                        ${key}
                        </strong>

                        :
                        ${value}

                     </p>`;
            }

        );

    output +=

        `<p>

            <strong>Status:</strong>

            ${techEvent.checkAvailability()}

         </p>`;

    document.getElementById(
        "objectOutput"
    ).innerHTML = output;
}


// =====================================
// EXERCISE 6
// Arrays and Methods
// =====================================

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

function addCommunityEvent() {

    eventArray.push({

        name: "Sports Meet",

        category: "Sports"

    });

    document.getElementById(
        "arrayOutput"
    ).innerHTML =

        "Sports Meet Added Successfully!";
}

function showMusicEvents() {

    const musicEvents =

        eventArray.filter(

            event =>

                event.category ===
                "Music"

        );

    let output =
        "<h4>Music Events</h4>";

    musicEvents.forEach(
        event => {

            output +=

                `<p>
                    ${event.name}
                 </p>`;
        }
    );

    document.getElementById(
        "arrayOutput"
    ).innerHTML = output;
}

function showFormattedEvents() {

    const formattedEvents =

        eventArray.map(

            event =>

                `Workshop on
                 ${event.name}`

        );

    let output =
        "<h4>Formatted Events</h4>";

    formattedEvents.forEach(
        event => {

            output +=

                `<div class="eventCard">
                    ${event}
                 </div>`;
        }
    );

    document.getElementById(
        "arrayOutput"
    ).innerHTML = output;
}


// Load Initial Data

window.addEventListener(
    "load",
    function () {

        loadEventInfo();

        loadEvents();

    }
);
// =====================================
// EXERCISE 7
// DOM Manipulation
// =====================================

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

function displayDOMEvents() {

    const container =

        document.querySelector(
            "#domEventContainer"
        );

    container.innerHTML = "";

    domEvents.forEach(event => {

        const card =

            document.createElement(
                "div"
            );

        card.className =
            "eventCard";

        card.innerHTML =

            `<h4>
                ${event.name}
             </h4>`;

        container.appendChild(
            card
        );

    });

}

function registerDOMEvent() {

    document.querySelector(
        "#domStatus"
    ).innerHTML =

        "Successfully Registered!";
}

function cancelDOMEvent() {

    document.querySelector(
        "#domStatus"
    ).innerHTML =

        "Registration Cancelled";
}


// =====================================
// EXERCISE 8
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

function registerCommunityEvent() {

    document.getElementById(
        "registerMessage"
    ).innerHTML =

        "Successfully Registered!";
}

function filterCategory() {

    const selectedCategory =

        document.getElementById(
            "categoryFilter"
        ).value;

    let output = "";

    const filteredEvents =

        eventCategories.filter(

            event =>

                selectedCategory ===
                "All"

                ||

                event.category ===
                selectedCategory

        );

    filteredEvents.forEach(

        event => {

            output +=

                `<p>
                    ${event.name}
                 </p>`;
        }

    );

    document.getElementById(
        "categoryOutput"
    ).innerHTML = output;
}

function searchEvent() {

    const keyword =

        document.getElementById(
            "searchBox"
        )

            .value

            .toLowerCase();

    const result =

        eventCategories.filter(

            event =>

                event.name

                    .toLowerCase()

                    .includes(
                        keyword
                    )

        );

    let output = "";

    result.forEach(

        event => {

            output +=

                `<p>
                    ${event.name}
                 </p>`;
        }

    );

    document.getElementById(
        "searchOutput"
    ).innerHTML = output;
}


// =====================================
// EXERCISE 9
// Async JS
// Promises
// Async / Await
// =====================================

function showLoading() {

    document.getElementById(
        "loadingSpinner"
    ).innerHTML =

        "<h4>Loading...</h4>";
}

function hideLoading() {

    document.getElementById(
        "loadingSpinner"
    ).innerHTML = "";
}


// Using .then()

function fetchEventsUsingThen() {

    showLoading();

    fetch(
        "https://jsonplaceholder.typicode.com/users"
    )

        .then(
            response =>
                response.json()
        )

        .then(data => {

            hideLoading();

            let output =

                "<h4>Events Loaded Using .then()</h4>";

            data

                .slice(0, 5)

                .forEach(user => {

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


// Async Await

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

        data

            .slice(0, 5)

            .forEach(user => {

                output +=

                    `<p>
                        ${user.name}
                     </p>`;
            });

        document.getElementById(
            "asyncOutput"
        ).innerHTML = output;

    }

    catch (error) {

        hideLoading();

        document.getElementById(
            "asyncOutput"
        ).innerHTML =

            "Error Loading Data";

        console.error(error);

    }

}


// =====================================
// EXERCISE 10
// Modern JavaScript Features
// =====================================

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


// Default Parameter

function getEventInfo(

    eventName = "Community Event"

) {

    return `Event Name:
            ${eventName}`;
}

function showModernFeatures() {

    let output = "";

    // Default Parameter

    output +=

        `<h4>
            Default Parameter
         </h4>

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

        `<h4>
            Destructuring
         </h4>

         <p>
            Name:
            ${name}
         </p>

         <p>
            Category:
            ${category}
         </p>

         <p>
            Seats:
            ${seats}
         </p>`;


    // Spread Operator

    const clonedEvents =

        [...modernEvents];

    const filteredEvents =

        clonedEvents.filter(

            event =>

                event.category ===
                "Music"

        );

    output +=

        `<h4>
            Spread Operator
         </h4>`;

    filteredEvents.forEach(

        event => {

            output +=

                `<p>
                    ${event.name}
                 </p>`;
        }

    );

    document.getElementById(
        "modernOutput"
    ).innerHTML = output;

    console.log(
        "Cloned Events:",
        clonedEvents
    );
}
// =====================================
// EXERCISE 11
// Working with Forms
// =====================================

const registrationForm =

    document.getElementById(
        "registrationForm"
    );

if (registrationForm) {

    registrationForm.addEventListener(

        "submit",

        function (event) {

            event.preventDefault();

            document.getElementById(
                "nameError"
            ).innerHTML = "";

            document.getElementById(
                "emailError"
            ).innerHTML = "";

            document.getElementById(
                "eventError"
            ).innerHTML = "";

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

            if (
                name.trim() === ""
            ) {

                document.getElementById(
                    "nameError"
                ).innerHTML =
                    "Name is required";

                isValid = false;
            }

            if (
                email.trim() === ""
            ) {

                document.getElementById(
                    "emailError"
                ).innerHTML =
                    "Email is required";

                isValid = false;
            }

            if (
                selectedEvent === ""
            ) {

                document.getElementById(
                    "eventError"
                ).innerHTML =
                    "Please select an event";

                isValid = false;
            }

            if (isValid) {

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

}


// =====================================
// EXERCISE 12 & 13
// AJAX + FETCH API
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

                if (
                    !response.ok
                ) {

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


// =====================================
// EXERCISE 14
// jQuery and Frameworks
// =====================================

$(document).ready(function () {

    $("#registerBtn").click(
        function () {

            alert(
                "Registered Successfully using jQuery!"
            );

        }
    );

    $("#showCardBtn").click(
        function () {

            $("#jqueryCard")
                .fadeIn(1000);

        }
    );

    $("#hideCardBtn").click(
        function () {

            $("#jqueryCard")
                .fadeOut(1000);

        }
    );

    $("#frameworkBenefit").html(

        "<h4>Benefit of React/Vue</h4>" +

        "<p>" +

        "React and Vue provide component-based architecture, making applications easier to develop, maintain and scale."

        +

        "</p>"

    );

});


// =====================================
// HTML EXERCISE SUPPORT FUNCTIONS
// =====================================

// Registration Form

function showConfirmation(event) {

    event.preventDefault();

    document.getElementById(
        "confirmationMessage"
    ).innerHTML =

        "Registration Submitted Successfully!";
}


// Phone Validation

function validatePhone() {

    const phone =

        document.getElementById(
            "phone"
        ).value;

    const phoneMessage =

        document.getElementById(
            "phoneMessage"
        );

    if (
        /^\d{10}$/.test(
            phone
        )
    ) {

        phoneMessage.innerHTML =
            "Valid Phone Number";

        phoneMessage.style.color =
            "green";

    }

    else {

        phoneMessage.innerHTML =
            "Enter a valid 10-digit number";

        phoneMessage.style.color =
            "red";
    }

}


// Event Fee

function showFee() {

    const fee =

        document.getElementById(
            "eventSelect"
        ).value;

    document.getElementById(
        "feeDisplay"
    ).innerHTML =

        `Event Fee:
         ₹${fee}`;
}


// Character Count

function countCharacters() {

    const count =

        document.getElementById(
            "feedbackText"
        ).value.length;

    document.getElementById(
        "charCount"
    ).innerHTML =

        `Characters:
         ${count}`;
}


// Feedback

function submitFeedback() {

    document.getElementById(
        "confirmation"
    ).innerHTML =

        "Feedback Submitted Successfully!";
}


// Enlarge Image

function enlargeImage() {

    const image =

        document.getElementById(
            "eventImage"
        );

    image.style.width =

        image.style.width === "500px"

            ? "250px"

            : "500px";
}


// Video Ready

function videoReady() {

    document.getElementById(
        "videoStatus"
    ).innerHTML =

        "Video Ready To Play";
}


// Local Storage

function savePreference() {

    const preference =

        document.getElementById(
            "eventType"
        ).value;

    localStorage.setItem(
        "preferredEvent",
        preference
    );

    document.getElementById(
        "preferenceMessage"
    ).innerHTML =

        "Preference Saved!";
}


// Load Preference

window.addEventListener(

    "load",

    function () {

        const savedPreference =

            localStorage.getItem(
                "preferredEvent"
            );

        if (
            savedPreference
        ) {

            const eventType =

                document.getElementById(
                    "eventType"
                );

            if (
                eventType
            ) {

                eventType.value =
                    savedPreference;
            }

        }

    }

);


// Clear Storage

function clearPreferences() {

    localStorage.clear();

    sessionStorage.clear();

    document.getElementById(
        "preferenceMessage"
    ).innerHTML =

        "Preferences Cleared!";
}


// Geolocation

function findLocation() {

    if (
        navigator.geolocation
    ) {

        navigator.geolocation.getCurrentPosition(

            function (position) {

                document.getElementById(
                    "locationResult"
                ).innerHTML =

                    `Latitude:
                     ${position.coords.latitude}

                     <br>

                     Longitude:
                     ${position.coords.longitude}`;

            },

            function (error) {

                document.getElementById(
                    "locationResult"
                ).innerHTML =

                    error.message;

            },

            {

                enableHighAccuracy: true,

                timeout: 10000

            }

        );

    }

    else {

        document.getElementById(
            "locationResult"
        ).innerHTML =

            "Geolocation Not Supported";
    }

}


// Warn Before Leaving Page

window.onbeforeunload =
    function () {

        return "Unsaved changes may be lost.";

    };