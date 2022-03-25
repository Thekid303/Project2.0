const logoutHandler = async function (event) {
    event.preventDefault();
  
    try {
      const response = await fetch("/api/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
  
      // const data = await response.json();
      // console.log(data);
  
      if (response.ok) {
        document.location.replace('/'); //if (200) 
      } else {
        alert("Failed to logout");
      }
  
    } catch (err) {
      console.log(err);
    }
  };
  
  const logoutBtn = document.querySelector("#logoutBtn");
  
  if (logoutBtn) {
    logoutBtn.addEventListener("click", logoutHandler);
  };