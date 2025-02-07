<?php
// login-handler.php

// Hardcoded email and password for demonstration
$correct_email = 'user@example.com';
$correct_password = 'password123';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validate the credentials
    if ($email === $correct_email && $password === $correct_password) {
        // Set a cookie for the logged-in user (expires in 1 hour)
        setcookie('user', $email, time() + 3600, '/');
        // Redirect to the dashboard or home page after successful login
        header('Location: dashboard.html');
        exit();
    } else {
        // If credentials are incorrect, redirect back to login page with error message
        header('Location: login.html?error=Wrong email or password');
        exit();
    }
}
?>
