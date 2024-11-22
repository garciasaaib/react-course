
// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { edad, clave, nombre, } = persona;
 
// console.log( nombre );
// console.log( edad );
// console.log( clave );
export interface UsContext {
    edad: number;
    clave: string;
}
export const usContext = ({ clave, edad }:UsContext) => {


    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        },
    }

}

export const { nombreClave, anios, latlng: { lat, lng } } = usContext( persona );

// console.log(nombreClave, anios);
// console.log( lat, lng );


