document.addEventListener('DOMContentLoaded', function () {
    var statValues = document.querySelectorAll('.lims-stat-value');
    if (!statValues.length) return;

    var DURATION = 1500;

    function animarContador(elemento) {
        var target = parseInt(elemento.dataset.target, 10);
        var suffix = elemento.dataset.suffix || '';
        var inicio = null;

        function paso(timestamp) {
            if (inicio === null) inicio = timestamp;
            var progreso = Math.min((timestamp - inicio) / DURATION, 1);
            var valorActual = Math.floor(progreso * target);
            elemento.textContent = valorActual + suffix;
            if (progreso < 1) {
                requestAnimationFrame(paso);
            } else {
                elemento.textContent = target + suffix;
            }
        }

        requestAnimationFrame(paso);
    }

    var statsSection = document.querySelector('.lims-stats');
    if (!statsSection) return;

    var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                statValues.forEach(animarContador);
                obs.disconnect();
            }
        });
    }, { threshold: 0.4 });

    observer.observe(statsSection);
});
