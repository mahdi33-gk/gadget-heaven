import React from 'react';
import { useRouteError } from 'react-router-dom';

const Err = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>404!</h1>
        </div>
    );
};

export default Err;