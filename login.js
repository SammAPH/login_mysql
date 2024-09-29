document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se recargue
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Enviar solicitud al backend
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById("message").textContent = "Login exitoso!";
        } else {
            document.getElementById("message").textContent = "Usuario o contraseña incorrectos.";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("message").textContent = "Ocurrió un error.";
    });
});
