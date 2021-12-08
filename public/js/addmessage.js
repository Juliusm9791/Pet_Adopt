const addMessageFormHandler = async (event) => {
  event.preventDefault();

  const petId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const text = document.querySelector('#messageText').value;
  console.log(petId, text)
  if (text) {
    const response = await fetch('/api/message', {
      method: 'POST',
      body: JSON.stringify({ text, petId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/allpets/pet/${petId}`);
    } else {
      alert('ERROR: Cant add Message.');
    }
  }
};
  
  document
    .querySelector('#saveMessageButton')
    .addEventListener('click', addMessageFormHandler);
  
