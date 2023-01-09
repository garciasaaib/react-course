import React from 'react';
import { MyFormAControlled } from './form-hoc';
import { NormalForm } from './normal-form';

export const HocPage = () => (
  <>
    <h2>High Order Component (HOC)</h2>
    <p>Sigue las instrucciones que vienen en el curso.</p>
    <NormalForm/>
    <MyFormAControlled onSubmit={(data) => alert(JSON.stringify(data))}/>
  </>
);
