const users = []; // Array para almacenar los usuarios registrados

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const registerUsername = document.getElementById('registerUsername').value;
    const registerPassword = document.getElementById('registerPassword').value;
    const registerMessage = document.getElementById('registerMessage');

    // Verificar si el usuario ya existe
    const existingUser = users.find(user => user.username === registerUsername);
    if (existingUser) {
        registerMessage.textContent = 'El usuario ya existe.';
        registerMessage.className = 'message'; // Resetea la clase para error
    } else {
        // Agregar el nuevo usuario al array
        users.push({ username: registerUsername, password: registerPassword });
        registerMessage.textContent = 'Registro exitoso. Ahora puedes iniciar sesión.';
        registerMessage.className = 'message success'; // Cambia la clase a éxito
        document.getElementById('registerForm').reset(); // Reiniciar el formulario
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const loginMessage = document.getElementById('loginMessage');

    // Validar las credenciales
    const user = users.find(user => user.username === loginUsername && user.password === loginPassword);
    if (user) {
        alert('Inicio de sesión exitoso');
        // Redirigir al usuario a otra página
        // window.location.href = 'dashboard.html'; // Cambia a la URL de tu dashboard
    } else {
        loginMessage.textContent = 'Usuario o contraseña incorrectos.';
        loginMessage.className = 'message'; // Resetea la clase para error
    }
});
