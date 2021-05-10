const signUpForm = async (event) => {
  event.preventDefault();

  const validate = document.querySelector('#validate').value.trim();
  const password = document.querySelector('#password').value.trim();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  
  

  if(password !== validate){
    alert("Passwords do not match.");
  } else if (name && email && password && validate) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(
        { name, 
          email, 
          password }
        ),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/userProfile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signUp')
  .addEventListener('submit', signUpForm);