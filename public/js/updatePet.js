const updatePetFormHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const petName = document.querySelector('#updatePetName');
  const breed = document.querySelector('#updatePetBreed');
  const age = document.querySelector('#updatePetAge');
  const description = document.querySelector('#updatePetDescription');
  const picture = document.querySelector('#updatePetPicture');
  const petTypeSelect = document.querySelector('#updatePetType').selectedOptions;
  let petType = petTypeSelect[0].textContent;

  let errors = [];
  let noerrors = [];
  const querySelectors = {
    petName,
    breed,
    age,
    description,
    picture,
    petType,
  }

  const body = {
    petName: petName.value.trim(),
    breed: breed.value.trim(),
    age: age.value.trim(),
    description: description.value.trim(),
    picture: picture.value.trim(),
    petType
  };

  Object.keys(body).forEach(key => {
    (!body[key]) ? errors.push(key) : noerrors.push(key);
  });

  if (!errors.length) {
    try {
      const response = await fetch(`/api/pet/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace(`/mypets/update/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    errors.forEach(error => {
      querySelectors[error].classList.add('border-danger');
    });
    if (noerrors) {
      noerrors.forEach(noerror => {
        querySelectors[noerror].classList.remove('border-danger');
      });
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

