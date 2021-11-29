import React from 'react';

import Title from './Title';
import Control from './Control';

export default function App() {
    const title = 'Cilindro contruido por nodos';
    const styleAgregarPadding = {
        padding: '0% 1% 0% 1%'
    };
    return (
        <React.Fragment>
            <Title title={title}/>
            <hr />
            <div className='p-grid' style={styleAgregarPadding}>
                <div className='p-col-3'>
                    <Control />
                </div>
                <div className='p-col'>
                    Wow!!!
                </div>
            </div>
        </React.Fragment>
    );
}