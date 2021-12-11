const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/mypets');
    } else {
      alert('Failed to login e-mail or password is incorrect.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstName-signup');
  const lastName = document.querySelector('#lastName-signup');
  const email = document.querySelector('#email-signup');
  const phoneNumber = document.querySelector('#phone-signup');
  const password = document.querySelector('#password-signup');

  let errors = [];
  let noerrors = [];
  const querySelectors = {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
  }

  const body = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    email: email.value.trim(),
    phoneNumber: phoneNumber.value.trim(),
    password: password.value.trim(),
  };

  Object.keys(body).forEach(key => {
    (!body[key]) ? errors.push(key) : noerrors.push(key);
  });

  if (!errors.length) {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/mypets');
      }
    } catch (error) {
      console.log(error);
    }

  } else {
    noerrors.forEach(noerror => {
      querySelectors[noerror].classList.remove('border-danger');
    });
    if (errors) {
      errors.forEach(error => {
        querySelectors[error].classList.add('border-danger');
      })
      alert('You need to fill all fields');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
