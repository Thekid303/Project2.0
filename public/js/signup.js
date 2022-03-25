const signUpFormHandler = async function (event) {
    event.preventDefault();

    try {
      const firstNameEl = document.querySelector("#firstNameField");
      const lastNameEl = document.querySelector("#lastNameField");
      const emailEl = document.querySelector("#emailField");
      const passwordEl = document.querySelector("#passwordField");
  
      const response = await fetch("/api/user/signup", {
        method: "POST",
        body: JSON.stringify({
          name: `${firstNameEl.value} ${lastNameEl.value}`,
          email: emailEl.value,
          password: passwordEl.value,
        }),
        headers: { "Content-Type": "application/json" },
      });

    //   const data = await response.json();
    //   console.log(data);

      if (response.ok) {
        document.location.replace('/dashboard'); 
      } else {
        alert("Failed to signup");
      }

    } catch (err) {
      console.log(err);
    }
  };

  const signUpBtn = document.querySelector("#signUpBtn");
  
  if (signUpBtn) {
    signUpBtn.addEventListener("click", signUpFormHandler);
  };



