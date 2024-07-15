
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let usernames = [document.getElementById('username').value];
  let passwords = [document.getElementById('password').value];
  let messageElement = document.getElementById('message');

  let validUsers = [
    { username: ['user', 'Humberto', 'Arjona', 'Miguel', 'Francita'], password: ['pass', 'pass', 'pass', 'pass', 'pass'] },
  ];

  let isValid = false;
  for (let i = 0; i < validUsers[0].username.length; i++) {
    if (usernames[0] === validUsers[0].username[i] && passwords[0] === validUsers[0].password[i]) {
      isValid = true;
      break;
    }
  }

  if (isValid) {
    messageElement.style.color = 'green';
    messageElement.textContent = 'Login successful!';
    window.location.href = 'perfil.html'; // Redirige a la página 
  } else {
    messageElement.style.color = 'red';
    messageElement.textContent = 'Invalid username or password.';
  }
});