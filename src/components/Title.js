import React from 'react';

export default function Title(props) {
    return (
        <React.Fragment>
            <div className='p-text-center p-text-bold'>
                <h1>{props.title}</h1>
            </div>
        </React.Fragment>
    );
}