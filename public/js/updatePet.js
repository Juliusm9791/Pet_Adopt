const updatePetFormHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const petName = document.querySelector('#updatePetName').value.trim();
  const breed = document.querySelector('#updatePetBreed').value.trim();
  const age = document.querySelector('#updatePetAge').value.trim();
  const description = document.querySelector('#updatePetDescription').value;
  const picture = document.querySelector('#updatePetPicture').value;
  const petTypeSelect = document.querySelector('#updatePetType').selectedOptions;
  let petType = petTypeSelect[0].textContent;

  if (petName && breed && age && description && picture && petType) {
    const response = await fetch(`/api/pet/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ petName, breed, age, description, picture, petType  }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/mypets/update/${id}`);
    } else {
      alert('Failed to log in.');
    }
  }
};

const deletePetFormHandler = async () => {
  
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
    const response = await fetch(`/api/pet/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/mypets');
    } else {
      alert('ERROR: Cant Delete.');
    }
  
};

document
  .querySelector('#updatePetButton')
  .addEventListener('click', updatePetFormHandler);

document
  .querySelector('#deletePetButton')
  .addEventListener('click', deletePetFormHandler);

