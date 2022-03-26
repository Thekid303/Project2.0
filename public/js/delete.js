

const deleteClickHandler = async function() {
  await fetch(`/api/projects/${project.Id}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#deleteBtn')
  .addEventListener('click', deleteClickHandler);