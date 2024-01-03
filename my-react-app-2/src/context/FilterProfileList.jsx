import { createContext, useState, useContext } from "react";

export const FilterProfileListContext = createContext()

export const FilterProfileListProvider = ({ children }) => {
    const [filterProfileList, setFilterProfileList] = useState('')
 
    return (
        <FilterProfileListContext.Provider value={ filterProfileList }>
            {children}
        </FilterProfileListContext.Provider>
    )
}