import { pedirCarta, valorCarta, crearCartaHTML } from './';

/**
 * Este archivo contiene la lógica para el turno de la computadora
 * @param {Number} puntosMinimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML para actualizar los puntos de la computadora
 * @param {HTMLElement} divCartasComputadora para mostrar las cartas de la computadora
 * @param {Array<string>} deck de cartas
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error('No se enviaron los puntos mínimos');
    if ( !puntosHTML ) throw new Error('No se enviaron los puntos HTML');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}