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
  
      // const data = await response.json();
      // console.log(data);
  
      if (response.ok) {
        document.location.replace('/api/projects'); //if (200) 
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
