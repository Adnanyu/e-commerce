import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Category from '../category/category.component'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import './shop.style.scss'
import { getCategotyAndDocuments } from '../../utilities/firebase/firebase.utils'
import { setCategoriesMap } from '../../store/categories.slice'

const Shop = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getCategoriesMap = async () =>{
            const categoriesMap = await getCategotyAndDocuments()
    
            dispatch(setCategoriesMap(categoriesMap))
        }

        getCategoriesMap()
    },[dispatch])
    return(
       <Routes>
        <Route index element={<CategoriesPreview/> } />
        <Route path=':category' element={<Category/> } />
       </Routes>
    )
}

export default Shop