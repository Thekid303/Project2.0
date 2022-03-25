const tasksHandler = async function (event) {
    console.log("testing")
    event.preventDefault();
  
    try {  
      const response = await fetch("/dashboard/tasks", {
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
        document.location.replace('/dashboard/tasks'); //if (200) 
      } else {
        alert("Failed to login");
      }
  
    } catch (err) {
      console.log(err);
    }
  };

  const tasksBtn = document.querySelector("#tasksBtn");

if (tasksBtn) {
    tasksBtn.addEventListener("click", tasksHandler);
};
