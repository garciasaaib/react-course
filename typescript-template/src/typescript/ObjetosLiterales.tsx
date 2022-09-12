/** Interfaces
 * Las interfaces se definen de la mas completa a las sub interfaces contenidas
    Entonces Persona será la interface principal y direccion la secundaria.
    
    Las interfaces no sirven para hacer instancias.
    const persona = new persona() 
 */
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: string;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: "adrian",
        edad: 35,
        direccion: {
            pais: 'Mexico',
            casaNo: '43 A'
        }

    }

    persona.nombreCompleto = 'Adrian Garcia'

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
