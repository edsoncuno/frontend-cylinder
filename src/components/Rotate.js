import React from 'react';

import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

export default function Rotate() {
    const [numberRows, setNumberRows] = React.useState(1);
    const [numberColumns, setNumberColumns] = React.useState(1);
    const [numberTimes, setNumberTimes] = React.useState(1);
    return (
        <React.Fragment>
            <div className="p-text-center p-text-bold">
                Rotar
            </div>
            <div className='p-grid p-align-center p-col-align-center'>
                <div className='p-col p-text-center'>Cantidad de veces:</div>
                <div className='p-col'><InputNumber value={numberTimes} onValueChange={(e) => setNumberTimes(e.value)} allowEmpty={false} min={1} size={8} /></div>
            </div>
            <div className='p-grid p-align-center p-col-align-center'>
                <div className='p-col p-text-center'>Fila:</div>
                <div className='p-col'><InputNumber value={numberRows} onValueChange={(e) => setNumberRows(e.value)} allowEmpty={false} min={1} size={8} /></div>
                <div className='p-col p-d-flex'><Button icon="pi pi-angle-left" /><Button icon="pi pi-angle-right" /></div>
            </div>
            <div className='p-grid p-align-center p-col-align-center'>
                <div className='p-col p-text-center'>Columna:</div>
                <div className='p-col'><InputNumber value={numberColumns} onValueChange={(e) => setNumberColumns(e.value)} allowEmpty={false} min={1} size={8} /></div>
                <div className='p-col'><Button icon="pi pi-angle-up" /><Button icon="pi pi-angle-down" /></div>
            </div>
        </React.Fragment>
    );
}