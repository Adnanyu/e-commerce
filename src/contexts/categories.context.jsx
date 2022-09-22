import { useState, createContext, useEffect } from "react";
import { getCategotyAndDocuments } from "../utilities/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap ] = useState({});
    useEffect(() => {
        const getCategoriesMap = async () =>{
            const categoriesMap = await getCategotyAndDocuments()
    
            setCategoriesMap(categoriesMap)
        }

        getCategoriesMap()
    },[])

    const value = {categoriesMap}
    return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}