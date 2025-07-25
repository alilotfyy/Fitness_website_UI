// Hard-coded user credentials
const hardcodedUsers = {
    regularUser: {
        username: "User",
        password: "User@123"
    },
    adminUser: {
        username: "Admin",
        password: "Admin@123"
    }
};

// Login Form Submission
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate credentials against hard-coded data
    if (username === hardcodedUsers.regularUser.username && password === hardcodedUsers.regularUser.password) {
        // Redirect regular user to homepage
        window.location.href = "index.html";
    } else if (username === hardcodedUsers.adminUser.username && password === hardcodedUsers.adminUser.password) {
        // Redirect admin user to admin dashboard
        window.location.href = "admin.html";
    } else {
        // Show error message for invalid credentials
        document.getElementById("errorMessage").style.display = "block";
    }
});

// Signup Form Submission (Optional)
document.getElementById("signupForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Inform the user that signup is not available in this version
    alert("Signup is not available in this version. Please use the default credentials:\n\nRegular User:\nUsername: User\nPassword: User@123\n\nAdmin User:\nUsername: Admin\nPassword: Admin@123");
});