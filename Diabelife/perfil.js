document.addEventListener('DOMContentLoaded', (event) => {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
    if (currentUser) {
      document.getElementById('username').textContent = currentUser.username;
      document.getElementById('fullName').value = currentUser.fullName;
      document.getElementById('email').value = currentUser.email;
      if (currentUser.profilePic) {
        document.getElementById('profilePic').src = currentUser.profilePic;
      }
    } else {
      window.location.href = 'ejemplo.html';
    }
  
    document.getElementById('profilePicInput').addEventListener('change', function(event) {
      let reader = new FileReader();
      reader.onload = function() {
        let profilePic = document.getElementById('profilePic');
        profilePic.src = reader.result;
        currentUser.profilePic = reader.result;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      };
      reader.readAsDataURL(event.target.files[0]);
    });
  
    document.getElementById('guardarCambios').addEventListener('click', function() {
      // Obtener los valores editados
      let newFullName = document.getElementById('fullName').value;
      let newEmail = document.getElementById('email').value;
  
      // Actualizar el objeto currentUser
      currentUser.fullName = newFullName;
      currentUser.email = newEmail;
  
      // Guardar el objeto actualizado en localStorage
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
      // Mostrar mensaje de éxito (opcional)
      alert('Cambios guardados exitosamente.');
  
      // Actualizar campos visibles con los nuevos datos
      document.getElementById('fullName').value = currentUser.fullName;
      document.getElementById('email').value = currentUser.email;
    });
  });
  