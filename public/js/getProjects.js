const projectsHandler = async function (event) {
    console.log("testing")
    event.preventDefault();
  
    try {  
      const response = await fetch("api/projects", {
        method: "POST",
        body: JSON.stringify({
          username: usernameEl.value,
          password: passwordEl.value,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace('/api/projects'); 
      } else {
        alert("Failed to login");
      }
  
    } catch (err) {
      console.log(err);
    }
  };

  const projectsBtn = document.querySelector("#projectsBtn");

if (projectsBtn) {
    projectsBtn.addEventListener("click", projectsHandler);
};
