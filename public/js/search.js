const searchByTypeFormHandler = async (event) => {
    event.preventDefault();


const petTypeSelect = document.querySelector('#selectPetTypeSearch').selectedOptions;
let petType = petTypeSelect[0].textContent;
console.log(petType)

if ( petType ) {
    const response = await fetch(`/api/pet/${petType}`, {
        method: 'GET',
        // body: JSON.stringify({ petType }),
        // headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace(`/allpets/${petType}`);
    } else {
        alert("ERROR: Can't Add Pet.");
    }
}
};

document
    .querySelector('#searchByTypeButton')
    .addEventListener('click', searchByTypeFormHandler);