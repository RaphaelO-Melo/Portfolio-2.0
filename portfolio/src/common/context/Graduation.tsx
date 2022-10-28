import React, { createContext, useState, useContext } from 'react';
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

export const useGraduationContext = () => {

    const context = useContext(GraduationContext);

    function getType() : number {

        if(context != null)
            return context.type;

        return 0;

    }

    function changeType(newType: number) {

        if(newType === context?.type)
            context.setType(0);
        else
            context?.setType(newType);

    }

    function getSearch() : string {

        if(context != null)
            return context.search;

        return '';

    }

    function changeSearch(newSearch: string){
    
        context?.setSearch(newSearch);
    
    }

    return {
        getType,
        changeType,
        getSearch,
        changeSearch
    };

};