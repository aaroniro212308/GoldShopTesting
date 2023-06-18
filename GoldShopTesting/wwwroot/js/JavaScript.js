
    // Get the current date and time
    const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');

// Format the date and time to match the datetime-local input format
const currentDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

// Set the value of the datetime input field
document.getElementById('datetime').value = currentDateTime;
