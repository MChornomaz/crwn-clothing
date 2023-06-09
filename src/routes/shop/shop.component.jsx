import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from './../category/category.component';
import { useEffect } from 'react';
import { fetchCategoriesStart } from './../../store/categories/category.action';

import { useDispatch } from 'react-redux';
import './shop.styles.scss'

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        const getCategories = async ()=>{
            dispatch(fetchCategoriesStart())
        }

        getCategories()
    }, [dispatch])

    return (
    <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category/>} />
    </Routes>
    )
}

export default Shop