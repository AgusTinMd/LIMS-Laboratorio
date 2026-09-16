document.addEventListener('DOMContentLoaded', function () {
    var CREDENCIALES = {
        dni: '30123456',
        password: 'Paciente2026'
    };
    var SESSION_KEY = 'lims_paciente_activo';

    var form = document.getElementById('loginPacienteForm');
    var loginAlert = document.getElementById('loginAlert');
    var loginSuccess = document.getElementById('loginSuccess');
    var dniInput = document.getElementById('dni');
    var passwordInput = document.getElementById('password');
    var dniActivo = document.getElementById('dniActivo');
    var fechaAcceso = document.getElementById('fechaAcceso');
    var cerrarSesionBtn = document.getElementById('cerrarSesionPaciente');
    var togglePasswordBtn = document.getElementById('togglePassword');

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

    function esDniValido(valor) {
        return /^\d{7,8}$/.test(valor);
    }

    function iniciarSesion(dni) {
        var fecha = new Date().toLocaleString('es-AR');
        sessionStorage.setItem(SESSION_KEY, JSON.stringify({ dni: dni, fecha: fecha }));
        mostrarSesionActiva(dni, fecha);
    }

    function mostrarSesionActiva(dni, fecha) {
        dniActivo.textContent = dni;
        fechaAcceso.textContent = fecha;
        form.classList.add('d-none');
        loginSuccess.classList.remove('d-none');
        ocultarError();
    }

    function cerrarSesion() {
        sessionStorage.removeItem(SESSION_KEY);
        form.reset();
        marcarCampo(dniInput, true);
        marcarCampo(passwordInput, true);
        loginSuccess.classList.add('d-none');
        form.classList.remove('d-none');
    }

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        ocultarError();

        var dni = dniInput.value.trim();
        var password = passwordInput.value;

        marcarCampo(dniInput, esDniValido(dni));
        marcarCampo(passwordInput, password !== '');
        if (!esDniValido(dni) || password === '') return;

        if (dni === CREDENCIALES.dni && password === CREDENCIALES.password) {
            iniciarSesion(dni);
        } else {
            mostrarError('DNI o contraseña incorrectos. Verifique sus datos e intente nuevamente.');
        }
    });

    dniInput.addEventListener('input', function () {
        marcarCampo(dniInput, esDniValido(dniInput.value.trim()));
    });
    passwordInput.addEventListener('input', function () {
        marcarCampo(passwordInput, passwordInput.value !== '');
    });

    togglePasswordBtn.addEventListener('click', function () {
        var icono = togglePasswordBtn.querySelector('i');
        var esVisible = passwordInput.type === 'text';
        passwordInput.type = esVisible ? 'password' : 'text';
        icono.classList.toggle('fa-eye', esVisible);
        icono.classList.toggle('fa-eye-slash', !esVisible);
        togglePasswordBtn.setAttribute('aria-label', esVisible ? 'Mostrar contraseña' : 'Ocultar contraseña');
    });

    cerrarSesionBtn.addEventListener('click', cerrarSesion);

    var sesionGuardada = sessionStorage.getItem(SESSION_KEY);
    if (sesionGuardada) {
        var datos = JSON.parse(sesionGuardada);
        mostrarSesionActiva(datos.dni, datos.fecha);
    }
});