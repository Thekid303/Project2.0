const loginFormHandler = async function (event) {
  // console.log("testing")

  event.preventDefault();

  try {
    const usernameEl = document.querySelector("#emailField");
    const passwordEl = document.querySelector("#passwordField");

    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // const data = await response.json();
    // console.log(data);

    if (response.ok) {
      document.location.replace('/dashboard'); //if (200) 
    } else {
      alert("Failed to login");
    }

  } catch (err) {
    console.log(err);
  }
};

const signinBtn = document.querySelector("#signinBtn");

if (signinBtn) {
  signinBtn.addEventListener("click", loginFormHandler);
};
