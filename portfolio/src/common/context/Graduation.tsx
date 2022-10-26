import React, { createContext, useState } from 'react';
import {GraduationContextInterface} from 'types/GraduationContextInterface';

export const GraduationContext = createContext<GraduationContextInterface | null>(null);
GraduationContext.displayName = 'Graduation';

export const GraduationProvider = ({children} : any) => {
    
    const [type, setType] = useState(0); 
    const [search, setSearch] = useState('');

    return(
        <GraduationContext.Provider value={{type, setType, search, setSearch}}>
            {children}
        </GraduationContext.Provider>
    );

};