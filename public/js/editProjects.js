const editProjectsHandler = async function (event) {
    console.log("testing")
    event.preventDefault();
  
    try {  
      const response = await fetch("api/projects/edit", {
        method: "POST",
        body: JSON.stringify({
          username: usernameEl.value,
          password: passwordEl.value,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace('/api/projects/edit'); 
      } else {
        alert("Failed to login");
      }
  
    } catch (err) {
      console.log(err);
    }
  };

  const projectsBtn = document.querySelector(`#edit`);

if (projectsBtn) {
    projectsBtn.addEventListener("click", editProjectsHandler);
};

// const postId = document.querySelector('input[name="post-id"]').value;

// const editFormHandler = async function(event) {
//   event.preventDefault();

//   const title = document.querySelector('input[name="post-title"]').value;
//   const body = document.querySelector('textarea[name="post-body"]').value;

//   await fetch(`/api/projects/edit`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       title,
//       body
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   document.location.replace('/api/projects/edit');
// };

// const deleteClickHandler = async function() {
//   await fetch(`/api/projects/edit`, {
//     method: 'DELETE'
//   });

//   document.location.replace('/api/projects/edit');
// };

// document
//   .querySelector('#edit-post-form')
//   .addEventListener('submit', editFormHandler);
// document
//   .querySelector('#delete-btn')
//   .addEventListener('click', deleteClickHandler);
