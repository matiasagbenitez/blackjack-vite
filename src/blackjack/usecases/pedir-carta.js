/**
 * Esta función me permite pedir una carta
 * @param {Array<string>} deck Un arreglo de strings que representa un deck de cartas
 * @returns {string} retorna la carta que se pidió
 */
export const pedirCarta = (deck) => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}