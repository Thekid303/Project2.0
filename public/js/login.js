const loginFormHandler = async function (event) {
  // console.log("testing")

  event.preventDefault();

  try {
    const emailEl = document.querySelector("#emailField");
    const passwordEl = document.querySelector("#passwordField");
    console.log(emailEl.value, passwordEl.value)

    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailEl.value,
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