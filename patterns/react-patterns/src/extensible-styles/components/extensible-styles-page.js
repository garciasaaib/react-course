import React from 'react';
import { CustomButton } from './custom-button';
import { Button } from './normal-button';

export const ExtensibleStylesPage = () => (
  <>
    <h1>Extensible Styles</h1>
    <h2>Ejemplo sin Extensible Styles</h2>
    <Button type="button">Click</Button>
    <hr />

    <h2>Ejesmplo con Extensible Styles</h2>
    <CustomButton
      className='btn btn-danger'
      style={{color: '40px'}}
      type="button"
    >
      Hello
    </CustomButton>
  </>
);
