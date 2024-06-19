// Se importan las funciones necesarias de la biblioteca RxJS. fromEvent crea un observable a partir de eventos del DOM, y map transforma los datos emitidos por el observable.
const { fromEvent } = rxjs;
const { map } = rxjs.operators;

// Seleccionar el elemento donde mostraremos las coordenadas
const coordinatesDiv = document.getElementById('coordenadas');

// Crear un flujo de eventos de clic en el documento
const clicks$ = fromEvent(document, 'click');

// Transformar el evento de clic en las coordenadas (x, y)
const coordinates$ = clicks$.pipe(
    map(event => `X: ${event.clientX}, Y: ${event.clientY}`)
);

// Suscribirse al flujo de coordenadas y actualizar el DOM
coordinates$.subscribe(coordinates => {
    coordinatesDiv.innerText = coordinates;
});
