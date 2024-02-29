function login(event) {
    event.preventDefault();
  
    // Get the values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check if the username and password are correct (Dummy check)
    if (username === "admin" && password === "password") {
      // Redirect to dashboard or do something else on successful login
      alert("Login successful!");
    } else {
      // Display error message
      document.getElementById("error-msg").innerText = "Invalid username or password";
    }
  }