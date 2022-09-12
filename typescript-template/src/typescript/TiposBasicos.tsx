import React from 'react'

export const TiposBasicos = () => {

    let name: string | number | boolean = 'Adrian'
    let age: number = 28
    let active : boolean = true

    const powers: Array<string> = ['Super Speed', 'Fly', 'Breath water']
    const colors: string[] = ['Green', 'Red', 'Brown']

    return (
        <>
            <h3>TiposBasicos</h3>
            {name} {age} {active || 'not active'}
            {powers.join(', ')}
            {colors.join(', ')}
        </>
    )
}
