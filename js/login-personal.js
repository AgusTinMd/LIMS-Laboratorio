document.addEventListener('DOMContentLoaded', function () {
    var CREDENCIALES = {
        usuario: 'bioq_perez',
        password: 'Lab2026!'
    };
    var SESSION_KEY = 'lims_personal_activo';

    var form = document.getElementById('loginPersonalForm');
    var loginAlert = document.getElementById('loginAlert');
    var loginSuccess = document.getElementById('loginSuccess');
    var usuarioInput = document.getElementById('usuario');
    var passwordInput = document.getElementById('password');
    var usuarioActivo = document.getElementById('usuarioActivo');
    var fechaAcceso = document.getElementById('fechaAcceso');
    var cerrarSesionBtn = document.getElementById('cerrarSesionPersonal');

    function mostrarError(mensaje) {
        loginAlert.textContent = mensaje;
        loginAlert.classList.remove('d-none');
    }

    function ocultarError() {
        loginAlert.classList.add('d-none');
    }

    function marcarCampo(input, esValido) {
        input.classList.toggle('is-invalid', !esValido);
        var feedback = input.closest('.mb-3').querySelector('.invalid-feedback');
        if (feedback) feedback.classList.toggle('d-block', !esValido);
    }

    function iniciarSesion(usuario) {
        var fecha = new Date().toLocaleString('es-AR');
        sessionStorage.setItem(SESSION_KEY, JSON.stringify({ usuario: usuario, fecha: fecha }));
        mostrarSesionActiva(usuario, fecha);
    }

    function mostrarSesionActiva(usuario, fecha) {
        usuarioActivo.textContent = usuario;
        fechaAcceso.textContent = fecha;
        form.classList.add('d-none');
        loginSuccess.classList.remove('d-none');
        ocultarError();
    }

    function cerrarSesion() {
        sessionStorage.removeItem(SESSION_KEY);
        form.reset();
        marcarCampo(usuarioInput, true);
        marcarCampo(passwordInput, true);
        loginSuccess.classList.add('d-none');
        form.classList.remove('d-none');
    }

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        ocultarError();

        var usuario = usuarioInput.value.trim();
        var password = passwordInput.value;

        marcarCampo(usuarioInput, usuario !== '');
        marcarCampo(passwordInput, password !== '');
        if (usuario === '' || password === '') return;

        if (usuario === CREDENCIALES.usuario && password === CREDENCIALES.password) {
            iniciarSesion(usuario);
        } else {
            mostrarError('Usuario o contraseña incorrectos. Verifique sus credenciales e intente nuevamente.');
        }
    });

    [usuarioInput, passwordInput].forEach(function (input) {
        input.addEventListener('input', function () {
            marcarCampo(input, input.value.trim() !== '');
        });
    });

    cerrarSesionBtn.addEventListener('click', cerrarSesion);

    var sesionGuardada = sessionStorage.getItem(SESSION_KEY);
    if (sesionGuardada) {
        var datos = JSON.parse(sesionGuardada);
        mostrarSesionActiva(datos.usuario, datos.fecha);
    }
});