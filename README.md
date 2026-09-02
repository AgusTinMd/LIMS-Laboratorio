# LIMS-Laboratorio

Nombre del proyecto - LIMS - Laboratorio Bioquímico 
Integrantes:

1. Agustin Maidana Diaz
2. Axel Molina
3. Lara Ain Serrano

Descripción breve. Sistema web para un laboratorio bioquímico donde se podran ver los servicios, los análisis, los datos de las muestras y las opciones para pacientes y profesionales. Por ahora es sólo la landing page.

Tecnologías que usamos: HTML5 CSS Font Awesome (para los iconos)

Dónde usamos Flexbox? En el header para poner el logo a la izquierda y tirar los botones del menú hacia la derecha y que esten bien ordenados. En el hero para centrar bien el título y el texto del medio. En el footer para acomodar los iconos de las redes al lado del otro.

Dónde usamos Grid? En las estadísticas para armar los cuadritos de experiencia que se acomodan solos. En las tarjetas de servicios y ventajas para hacer la grilla de tres columnas que se achica o agranda según la pantalla. y en el footer para armar las columnas con la info de contacto.

Qué variables CSS armamos? Guardamos los colores y las fuentes en variables para usarlas fácil en todo el código: --primary-blue: el azul oscuro de la marca. --accent-cyan: el turquesa para destacar cosas. --bg-light: el gris del fondo. --text-dark: el color de las letras principales. --text-muted: el gris para los textos secundarios. --white: el blanco para las tarjetas. --font-main: la tipografía general.

Cómo hicimos el diseño responsivo? Usamos Media Queries (puntos de quiebre en 992px y 768px) para que la página se vea bien en cualquier dispositivo: En las tablets y compus chicas se acomodan los espacios. En los celulares (menos de 768px), el menú y el footer se ponen uno abajo del otro en columna, las tarjetas se apilan de a una para que no se rompa nada, y la barra de arriba deja de ser fija para aprovechar mejor la pantalla.

## Prácticas de SEO y Accesibilidad Implementadas

Durante el desarrollo de esta interfaz, aplicamos diversas técnicas de optimización On-Page y accesibilidad para garantizar un buen posicionamiento en buscadores y una correcta experiencia de usuario:

*   **Semántica HTML5:** Estructuramos el contenido utilizando etiquetas semánticas como `<header>`, `<nav>`, `<main>`, `<section>` y `<footer>`[cite: 2, 4]. Esto facilita la interpretación y el rastreo del sitio por parte de los motores de búsqueda.
*   **Jerarquía de Encabezados:** Mantuvimos un orden lógico en la información, definiendo un único `<h1>` por página y distribuyendo el contenido secundario secuencialmente en etiquetas `<h2>` y `<h3>`.
*   **Metaetiquetas Clave:** Implementamos las etiquetas `<title>` y `<meta name="description">` en cada documento, redactando descripciones con palabras clave estratégicas del rubro ("Análisis Clínicos", "trazabilidad digital").
*   **Segmentación Regional:** Declaramos el idioma principal del sitio mediante el atributo `lang="es"` en la etiqueta `<html>`, un factor fundamental para el posicionamiento orgánico local.
*   **Accesibilidad en Imágenes:** Todas las etiquetas `<img>` cuentan con atributos `alt` fuertemente descriptivos (por ejemplo, "Área de Extracción y toma de muestras" o "Control de Calidad en análisis clínicos"), mejorando la indexación de imágenes y el soporte para lectores de pantalla.
*   **Atributos ARIA:** Integramos atributos `aria-label` en los elementos de navegación ("Menú principal") y en los iconos de redes sociales ("WhatsApp", "Instagram", "LinkedIn") para fortalecer el contexto semántico y la accesibilidad.
*   **Optimización Mobile-First:** Aseguramos la correcta adaptabilidad en dispositivos móviles mediante la etiqueta `<meta name="viewport">` y la implementación estructurada de Media Queries en CSS (con puntos de quiebre en 992px y 768px), un requisito técnico indispensable para la indexación actual de Google.
