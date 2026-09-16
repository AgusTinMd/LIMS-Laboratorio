document.addEventListener('DOMContentLoaded', function () {
    var dias = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
    var fechaHora = document.getElementById('fechaHora');

    function actualizarFechaHora() {
        var ahora = new Date();
        var dia = dias[ahora.getDay()];
        var fecha = String(ahora.getDate()).padStart(2, '0') + '/' +
            String(ahora.getMonth() + 1).padStart(2, '0') + '/' +
            ahora.getFullYear();
        var hora = String(ahora.getHours()).padStart(2, '0') + ':' +
            String(ahora.getMinutes()).padStart(2, '0');
        fechaHora.textContent = dia + ' ' + fecha + ' · ' + hora;
    }

    actualizarFechaHora();
    setInterval(actualizarFechaHora, 30000);
});
