import React, { createContext, useState } from 'react';

export const GetValue = createContext();

const Value = ({ children }) => {
    const [state, setState] = useState('javaScript');
    return (
        <GetValue.Provider value={[state, setState]}>
            {children}
        </GetValue.Provider>
    );
};

export default Value;
