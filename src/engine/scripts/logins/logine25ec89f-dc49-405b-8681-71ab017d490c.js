document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const btn = document.getElementById("kolo");
  const fromDiv = document.getElementById("form-div");

  btn.onclick = () => {
    fromDiv.innerHTML = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      /* Modal Background */
      .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3); /* Slightly darker background */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }

      /* Modal Content */
      .modal-content {
        background-color: white;
        width: 100%;
        max-width: 400px; /* max-width for better readability */
        padding: 32px; /* Added more padding for breathing space */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Stronger shadow for depth */
        border-radius: 12px; /* Rounded corners */
        font-family: "Arial", sans-serif;
      }

      /* Header */
      .modal-content h2 {
        text-align: center;
        font-size: 24px; /* Larger heading */
        margin-bottom: 24px; /* Spacing below header */
        color: #333; /* Darker text color */
      }

      /* Form Label and Input Styles */
      .form-label {
        font-size: 14px; /* Consistent font size */
        font-weight: 600; /* Bold font weight for clarity */
        color: #333; /* Dark text for visibility */
        margin-bottom: 6px; /* Reduced margin for better spacing */
        display: block;
      }

      .form-input {
        width: 94%;
        padding: 12px 16px; /* More padding for better touch targets */
        border-radius: 8px; /* Slightly rounded corners for input fields */
        border: 1px solid #d1d5db; /* Soft border */
        color: #333; /* Dark text for readability */
        font-size: 14px;
        margin-bottom: 20px; /* More space between inputs */
        transition: border 0.3s ease-in-out;
      }

      .form-input:focus {
        border-color: #3498db; /* Blue border on focus */
        outline: none;
        box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.2); /* Subtle focus shadow */
      }

      .form-input-error {
        border-color: #e74c3c; /* Red border for error states */
        background-color: #f9d6d6; /* Light red background for error state */
      }

      /* Error message text */
      .error-message {
        color: #e74c3c; /* Red error text */
        font-size: 12px; /* Smaller font for error messages */
        font-style: italic; /* Italicize error message */
        margin-top: 6px;
      }

      /* Submit Button */
      .submit-btn {
        background-color: #131630; /* Professional blue color */
        color: white;
        font-weight: 600;
        border-radius: 8px; /* Rounded button corners */
        border: none;
        padding: 12px 0; /* Vertical padding */
        width: 100%; /* Full width button */
        cursor: pointer;
        transition: background-color 0.3s ease;
        font-size: 16px; /* Larger button text */
      }

      .submit-btn:hover {
        background-color: #072661; /* Darker blue on hover */
      }

      /* Footer Link */
      .forgot-password {
        font-size: 12px; /* Slightly smaller */
        color: #3498db; /* Professional blue */
        font-weight: 600;
        text-decoration: none;
        display: block;
        text-align: center;
        margin-top: 12px; /* Space above the link */
      }

      .forgot-password:hover {
        color: #2980b9; /* Slightly darker blue on hover */
      }

      /* Footer Text */
      .footer-text {
        text-align: center;
        color: #777; /* Lighter gray for footer */
        font-size: 12px;
        margin-top: 24px; /* Space between form and footer */
      }
    </style>
  </head>
  <body>
    <!-- Modal Background -->
    <div class="modal-background">
      <!-- Modal Content -->
      <div class="modal-content">
        <h2>Sign In</h2>
        <form
          id="auth-ui-form"
          action=""
          method="POST"
          onsubmit="return validateForm()"
        >
          <div class="form-group">
            <label for="username" class="form-label">Email</label>
            <input
              name="email"
              id="username"
              type="email"
              placeholder="Enter your email"
              class="form-input"
            />
            <p id="email-error" class="error-message" style="display: none">
              Please enter a valid email address.
            </p>
          </div>
          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              class="form-input"
            />
            <!-- <p class="error-message">Please choose a valid password.</p> -->
          </div>
          <button type="submit" class="submit-btn">Sign In</button>
        </form>
        <a class="forgot-password" href="#">Forgot your password?</a>
        <p class="footer-text">&copy;2024 AuthUi Corp. All rights reserved.</p>
      </div>
    </div>

    <script>
      function validateForm() {
        // Clear previous errors
        const emailInput = document.getElementById("username");
        const emailError = document.getElementById("email-error");
        const passwordInput = document.getElementById("password");

        let isValid = true;

        // Regular expression for a simple email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        // Email Validation
        if (!emailPattern.test(emailInput.value)) {
          emailError.style.display = "block"; // Show error message
          emailInput.classList.add("form-input-error"); // Add error styling
          isValid = false;
        } else {
          emailError.style.display = "none"; // Hide error message if valid
          emailInput.classList.remove("form-input-error"); // Remove error styling
        }

        // Password Validation (example - ensure not empty)
        if (passwordInput.value.trim() === "") {
          passwordInput.classList.add("form-input-error");
          isValid = false;
        } else {
          passwordInput.classList.remove("form-input-error");
        }

        return isValid; // If form is valid, allow form submission
      }
    </script>
  </body>
</html>


    `;

    document.getElementById("auth-ui-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      console.log(form);
      alert("submitted");
    });
  };
});
