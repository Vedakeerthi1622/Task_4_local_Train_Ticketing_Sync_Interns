<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local Train Ticketing System</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <h1>Local Train Ticketing System</h1>
    </header>
    <main>
        <section>
            <h2>Book Your Ticket</h2>
            <form id="ticketForm">
                <label for="source">Source:</label>
                <input type="text" id="source" required>
                <label for="destination">Destination:</label>
                <input type="text" id="destination" required>
                <label for="date">Date:</label>
                <input type="date" id="date" required>
                <button type="submit">Book Ticket</button>
            </form>
        </section>
        <section>
            <h2>Your Tickets</h2>
            <div id="ticketList">
                <!-- Ticket records will be dynamically added here -->
            </div>
        </section>
    </main>
    <script src="script.js"></script>
</body>

</html>



body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f3e5f5;
    /* Pastel purple */
}

header {
    background-color: #512da8;
    /* Dark purple */
    color: #fff;
    text-align: center;
    padding: 20px 0;
}

h1 {
    margin: 0;
}

main {
    max-width: 800px;
    margin: 30px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0f4c3;
    /* Light pastel purple */
}

h2 {
    color: #512da8;
    /* Dark purple */
    margin-bottom: 10px;
}

form {
    display: flex;
    flex-direction: column;
}

form label {
    margin-bottom: 5px;
    color: #512da8;
    /* Dark purple */
}

form input[type="text"],
form input[type="date"] {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

form button {
    padding: 10px 20px;
    background-color: #388e3c;
    /* Dark green */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    align-self: center;
    transition: background-color 0.2s;
}

form button:hover {
    background-color: #2e7d32;
    /* Dark green on hover */
}

#ticketList {
    margin-top: 20px;
}

.ticket-entry {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #e1bee7;
    /* Light pastel purple */
}

.ticket-entry h3 {
    margin: 0;
    color: #512da8;
    /* Dark purple */
}

.ticket-entry p {
    color: #388e3c;
    /* Dark green */
    margin: 5px 0;
}

.ticket-entry p:last-child {
    font-weight: bold;
}


const ticketForm = document.getElementById('ticketForm');
const ticketList = document.getElementById('ticketList');

// Function to create a new ticket entry in the ticket list
function createTicketEntry(ticket) {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('ticket-entry');

    const sourceHeading = document.createElement('h3');
    sourceHeading.textContent = `Source: ${ticket.source}`;

    const destinationHeading = document.createElement('h3');
    destinationHeading.textContent = `Destination: ${ticket.destination}`;

    const dateDetails = document.createElement('p');
    dateDetails.textContent = `Date: ${ticket.date}`;

    entryDiv.appendChild(sourceHeading);
    entryDiv.appendChild(destinationHeading);
    entryDiv.appendChild(dateDetails);

    ticketList.appendChild(entryDiv);
}

// Event listener for ticket booking form submission
ticketForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    // Mock API call to book a ticket
    const newTicket = {
        source: source,
        destination: destination,
        date: date,
    };

    createTicketEntry(newTicket);
    ticketForm.reset();
});



