# Francisco Jiménez Corrales

Propuesta local de una landing para un proveedor de hielo en El Bosque, Cádiz.

Abrir `index.html` con Live Server. HTML, CSS y JavaScript sin dependencias ni compilación. Imágenes y tipografía Instrument Sans servidas localmente, con Arial como alternativa.

## Dirección visual: Frozen Material

Portada cinematográfica con el nombre comercial como titular y una fotografía integrada mediante máscara. Recorrido por una macrofotografía en plata, un estudio de producto sobre fondo claro y una composición de contraste que cruza el límite de sección. El footer concentra dirección, actividad y acceso a Google Maps.

Revelados fotográficos con máscaras, entrada del titular por líneas y desplazamiento fotográfico limitado a 14 px. Scroll nativo, observación de visibilidad y actualizaciones con `requestAnimationFrame` solo cuando son necesarias. La preferencia de movimiento reducido se respeta al cargar y al cambiar en el sistema. El contenido y los enlaces funcionan sin JavaScript.

Datos comerciales limitados a los proporcionados: nombre, actividad y dirección. Fotografías ilustrativas, sin atribución al establecimiento ni confirmación de formatos comercializados. La única salida comercial es Google Maps con la dirección proporcionada, sin coordenadas inventadas.

La página incluye una única etiqueta `noindex, nofollow`. No retirar sin autorización. Esta política se mantiene también en la versión de GitHub.

Repositorio: https://github.com/pabloldl/fcojimenezcorraleshielo . La subida del código no incluye la configuración de un despliegue ni de GitHub Pages.

Fuentes de imágenes y licencias: `assets/CREDITOS.md`.

## Verificación realizada

Rediseño comprobado localmente por HTTP con Microsoft Edge headless a 375, 768, 1440 y 1920 px: cuatro imágenes decodificadas, tipografía cargada, sin desbordamiento horizontal, enlaces internos válidos, navegación hasta la ubicación y ausencia de excepciones JavaScript. Comprobadas la etiqueta única de robots, la dirección codificada de Maps, los revelados al recorrer las secciones y la desactivación de animaciones con movimiento reducido. También se comprobó que el contenido no queda oculto al deshabilitar JavaScript. Capturas locales de portada y página completa en `.qa/`, carpeta excluida de Git, junto a `results.json` y el script de verificación. Inspeccionadas las portadas de los cuatro tamaños y las páginas completas de móvil y escritorio.

No se ha probado Safari ni un iPhone físico. El enlace de Maps contiene la dirección facilitada; no se ha verificado una ficha comercial ni una posición geográfica independiente. Todos los archivos creados se encuentran dentro de esta carpeta.
