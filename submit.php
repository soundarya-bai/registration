<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from the POST request
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Display the submitted data with basic formatting
    echo "
        <h2>Submission Successful</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Message:</strong> {$message}</p>
    ";
} else {
    echo "<p>Error: Invalid request method.</p>";
}
?>
