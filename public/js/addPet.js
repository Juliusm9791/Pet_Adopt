const addPetFormHandler = async (event) => {
    event.preventDefault();

    const petName = document.querySelector('#addPetName');
    const breed = document.querySelector('#addPetBreed');
    const age = document.querySelector('#addPetAge');
    const description = document.querySelector('#addPetDescription');
    const picture = document.querySelector('#addPetPicture');
    const petType = document.querySelector('#selectPetType');

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
        petType: petType.selectedOptions[0].textContent,
    };

    (body.petType === 'Select Pet Type') ? body.petType = null : body.petType;

    Object.keys(body).forEach(key => {
        (!body[key]) ? errors.push(key) : noerrors.push(key);
    });

    if (!errors.length) {
        try {
            const response = await fetch(`/api/pet`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace(`/mypets`);
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        noerrors.forEach(noerror => {
            querySelectors[noerror].classList.remove('border-danger');
        });
        errors.forEach(error => {
            querySelectors[error].classList.add('border-danger');
        })
    }
};

document
    .querySelector('#addPetButton')
    .addEventListener('click', addPetFormHandler);

