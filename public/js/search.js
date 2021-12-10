const searchByTypeFormHandler = async (event) => {
    event.preventDefault();


const petTypeSelect = document.querySelector('#selectPetTypeSearch');
let petType = petTypeSelect.selectedOptions[0].textContent

if ( petType !== 'Show all' ) {

    const response = await fetch(`/api/pet/${petType}`, {
        method: 'GET',
    });

    if (response.ok) {
        document.location.replace(`/allpets/${petType}`);
    } else {
        alert("ERROR: Can't Add Pet.");
    }
} else {
    const response = await fetch(`/api/pet`, {
        method: 'GET',
    });

    if (response.ok) {
        document.location.replace(`/allpets`);
    } else {
        alert("ERROR: Can't Add Pet.");
    }
}
};

document
    .querySelector('#searchByTypeButton')
    .addEventListener('click', searchByTypeFormHandler);