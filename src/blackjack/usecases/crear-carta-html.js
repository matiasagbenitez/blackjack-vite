/**
 * Esta función crea un elemento img con la carta que se le envía
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de la carta
 */
export const crearCartaHTML = (carta) => {

    if (!carta) throw new Error('No se envió la carta');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}