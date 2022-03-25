// const loginFormHandler = async (event) => {
// event.preventDefault();
  
//     // Collects Users info
//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
  
//     if (email && password) {
//       // Send a post request to match the info
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         // if info matches open user profile page 
//         document.location.replace('/profile');
//       } else {
//         alert(response.statusText);
//       }
//         }
//      };
  
//   const signupFormHandler = async (event) => {
//     event.preventDefault();
  
//     const name = document.querySelector('#name-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();
  
//     if (name && email && password) {
//         // confirm info added is acceptable
//       const response = await fetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify({ name, email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//           // Creates profile if info is acceptable.
//         document.location.replace('/profile');
//       } else {
//           // shows alert response on bad info. 
//         alert(response.statusText);
//       }
//     }
//   };
  
//   document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);
  
//   document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);
  

const emailField = document.querySelector("#emailField");
const passwordField = document.querySelector("#passwordField");
const loginError = document.querySelector("#loginError");
const signinBtn = document.querySelector("#signinBtn");

async function loginUser(event) {
  event.preventDefault();
  const email = emailField.value.trim();
  const password = passwordField.value.trim();
  if (email && password) {
    const response = await fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      location.href = "/projects";
    } else {
      loginError.textContent =
        "Login error - Please check your email and password and try again.";
    }
  } else {
    loginError.textContent =
      "Login error - Please provide a valid email and and password.";
  }
}



signinBtn.addEventListener("click", loginUser);