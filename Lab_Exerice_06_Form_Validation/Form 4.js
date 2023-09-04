const form = document.getElementById('registration-form');
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const dobInput = document.getElementById('dob');

// Form Validation
form.addEventListener('submit', (event) => {
  let isValid = true;

  if (!fullNameInput.checkValidity()) {
    fullNameInput.nextElementSibling.textContent = 'Please enter a valid name.';
    fullNameInput.nextElementSibling.classList.add('error');
    isValid = false;
  } else {
    fullNameInput.nextElementSibling.textContent = '';
    fullNameInput.nextElementSibling.classList.remove('error');
  }

  if (!emailInput.checkValidity()) {
    emailInput.nextElementSibling.textContent = 'Please enter a valid email address.';
    emailInput.nextElementSibling.classList.add('error');
    isValid = false;
  } else {
    emailInput.nextElementSibling.textContent = '';
    emailInput.nextElementSibling.classList.remove('error');
  }

  if (!passwordInput.checkValidity()) {
    passwordInput.nextElementSibling.textContent = 'Please enter a valid password (at least 8 characters with a mix of letters and numbers).';
    passwordInput.nextElementSibling.classList.add('error');
    isValid = false;
  } else {
    passwordInput.nextElementSibling.textContent = '';
    passwordInput.nextElementSibling.classList.remove('error');
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.nextElementSibling.textContent = 'Passwords do not match.';
    confirmPasswordInput.nextElementSibling.classList.add('error');
    isValid = false;
  } else {
    confirmPasswordInput.nextElementSibling.textContent = '';
    confirmPasswordInput.nextElementSibling.classList.remove('error');
  }

  if (!dobInput.checkValidity()) {
    dobInput.nextElementSibling.textContent = 'Please enter a valid date of birth (YYYY-MM-DD).';
    dobInput.nextElementSibling.classList.add('error');
    isValid = false;
  } else {
    const dob = new Date(dobInput.value);
    const ageInMilliseconds = Date.now() - dob.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    if (ageInYears < 18) {
      dobInput.nextElementSibling.textContent = 'You must be at least 18 years old.';
      dobInput.nextElementSibling.classList.add('error');
      isValid = false;
    } else {
      dobInput.nextElementSibling.textContent = '';
      dobInput.nextElementSibling.classList.remove('error');
    }
  }

  if (!isValid) {
    event.preventDefault();
  }
});

// Real-time Validation
fullNameInput.addEventListener('input', () => {
  if (!fullNameInput.checkValidity()) {
    fullNameInput.nextElementSibling.textContent = 'x';
    fullNameInput.nextElementSibling.classList.add('error');
  } else {
    fullNameInput.nextElementSibling.textContent = '✓';
    fullNameInput.nextElementSibling.classList.remove('error');
  }
});

emailInput.addEventListener('input', () => {
  if (!emailInput.checkValidity()) {
    emailInput.nextElementSibling.textContent = 'x';
    emailInput.nextElementSibling.classList.add('error');
  } else {
    emailInput.nextElementSibling.textContent = '✓';
    emailInput.nextElementSibling.classList.remove('error');
  }
});

passwordInput.addEventListener('input', () => {
  if (!passwordInput.checkValidity()) {
    passwordInput.nextElementSibling.textContent = 'x';
    passwordInput.nextElementSibling.classList.add('error');
  } else {
    passwordInput.nextElementSibling.textContent = '✓';
    passwordInput.nextElementSibling.classList.remove('error');
  }
});

confirmPasswordInput.addEventListener('input', () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.nextElementSibling.textContent = 'x';
    confirmPasswordInput.nextElementSibling.classList.add('error');
  } else {
    confirmPasswordInput.nextElementSibling.textContent = '✓';
    confirmPasswordInput.nextElementSibling.classList.remove('error');
  }
});

dobInput.addEventListener('input', () => {
  if (!dobInput.checkValidity()) {
    dobInput.nextElementSibling.textContent = 'x';
    dobInput.nextElementSibling.classList.add('error');
  } else {
    const dob = new Date(dobInput.value);
    const ageInMilliseconds = Date.now() - dob.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    if (ageInYears < 18) {
      dobInput.nextElementSibling.textContent = 'You must be at least 18 years old.';
      dobInput.nextElementSibling.classList.add('error');
    } else {
      dobInput.nextElementSibling.textContent = '✓';
      dobInput.nextElementSibling.classList.remove('error');
    }
  }
});

form.addEventListener('submit', (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Redirect the user to a new page
  window.location.href = 'thank-you-page.html';
});

form.addEventListener('submit', (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Display the message
  const message = document.getElementById('thank-you-message');
  message.style.display = 'block';
});