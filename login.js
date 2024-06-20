document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Prepare the data to be sent in the POST request
    const data = {
        username: email,
        password: password
    };

    // Send the POST request
    fetch('http://192.168.0.110:8000/user/marketing-login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log("response",response);
        if (response.ok){
            window.location.href = 'index.html';
        }
        else[
            alert("login failed")
        ]
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors (e.g., show an error message)
    });
});
