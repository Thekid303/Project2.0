// const logout = async () => {

//     // Logs out user 
//     const response = await fetch('/api/users/logout', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert(response.statusText);
//     }
//   };
  
//   document.querySelector('#logout').addEventListener('click', logout);
  
const logoutBtn = document.querySelector("#logoutBtn");

function logoutUser() {
    fetch("/users/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });
    location.href = "/";
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", logoutUser);
}