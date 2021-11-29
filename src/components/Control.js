import React from 'react';

import Built from './Built';
import Rotate from './Rotate';

export default function Control() {
    const styleAgregarBorde = {
        border: '1px solid cyan'
    };
    return (
        <React.Fragment>
            <div style={styleAgregarBorde}><Built /></div>
            <div style={styleAgregarBorde}><Rotate /></div>
        </React.Fragment>
    );
}