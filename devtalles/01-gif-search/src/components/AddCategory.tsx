import { useState } from 'react';

export const AddCategory = ({ onNewCategory }: { onNewCategory: (newCategory:string) => void}) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={onInputChange}
            />
        </form>
    )
}
