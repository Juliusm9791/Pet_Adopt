const addPetFormHandler = async (event) => {
    event.preventDefault();

    const petName = document.querySelector('#addPetName').value.trim();
    const breed = document.querySelector('#addPetBreed').value.trim();
    const age = document.querySelector('#addPetAge').value.trim();
    const description = document.querySelector('#addPetDescription').value;
    const picture = document.querySelector('#addPetPicture').value;
    const petTypeSelect = document.querySelector('#selectPetType').selectedOptions;
    let petType = petTypeSelect[0].textContent;

    console.log(petName, breed, age, description, picture, petType)

    if (petName && breed && age && description && picture && petType) {
        const response = await fetch('/api/pet', {
            method: 'POST',
            body: JSON.stringify({ petName, breed, age, description, picture, petType }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/mypets');
        } else {
            alert("ERROR: Can't Add Pet.");
        }
    }
};

document
    .querySelector('#addPetButton')
    .addEventListener('click', addPetFormHandler);

