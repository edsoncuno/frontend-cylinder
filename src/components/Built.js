import React from 'react';

import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

export default function Built() {
    const [numberN, setNumberN] = React.useState(1);
    return (
        <React.Fragment>
            <div className="p-text-center p-text-bold">
                Built
            </div>
            <div className='p-grid p-align-center p-col-align-center'>
                <div className='p-col p-text-center'>n:</div>
                <div className='p-col'><InputNumber value={numberN} onValueChange={(e) => setNumberN(e.value)} showButtons allowEmpty={false} min={1} max={30} size={5} /></div>
                <div className='p-col'><Button label="Generar" /></div>
            </div>
        </React.Fragment>
    );
}