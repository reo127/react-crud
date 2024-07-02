import React from 'react'
import Card from './Card'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../state/slice/productSlice'

const Productss = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products )
    console.log("products => ",products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                {
                    products.map((product, index) => {
                        return (
                            <Card title={product?.title} desc={product?.description} image={product?.thumbnail} brand={product?.brand} pid={product?.id} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Productss