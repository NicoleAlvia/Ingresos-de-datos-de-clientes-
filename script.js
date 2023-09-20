function guardarCliente() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var cedula = document.getElementById('cedula').value;
    var direccion = document.getElementById('direccion').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var correo = document.getElementById('correo').value;
    var pais = document.getElementById('pais').value;
    var sexo = document.getElementById('sexoMasculino').checked ? 'Masculino' : 'Femenino';

    // guarda los datos del cliente

    // Luego, muestra un mensaje de éxito.
    alert('Cliente guardado con éxito');
    document.getElementById('clienteForm').reset();
}