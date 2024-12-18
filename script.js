document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Submission Successful</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
    resultDiv.classList.remove('hidden');
    this.reset();
});
