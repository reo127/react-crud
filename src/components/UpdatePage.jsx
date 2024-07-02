import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchProductById, updateProduct } from '../state/slice/productSlice';


const UpdatePage = () => {
    const dispatch = useDispatch()
    const prodbyId = useSelector((state)=> state.product.ProductById) 
    console.log(prodbyId)
    const param = useParams()
    const [pid, setpid] = useState(param.id)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [image, setImage] = useState("")
    const [brand, setBrand] = useState("")
    useEffect(()=> {
        dispatch(fetchProductById(param.id))
    }, [])
    
    useEffect(() => {
        if(prodbyId){
            setTitle(prodbyId?.title)
            setDesc(prodbyId?.description)
            setImage(prodbyId?.thumbnail)
            setBrand(prodbyId?.brand)
        }
    }, [prodbyId])
    
    console.log(title, desc, image, brand) 

    const handleUpdate = () => {
        dispatch(updateProduct({title, desc, image, brand, pid}))
    }

    
  return (
    <div>
        <div className='mt-4 '>
            <label htmlFor="title">title: </label>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
        </div>
        <div className='mt-4 '>
            <label htmlFor="desc">desc: </label>
            <textarea type="text" value={desc} onChange={(e)=> setDesc(e.target.value)} className='w-[30rem]' />
        </div>
        <div className='mt-4 '>
            <label htmlFor="title">image: </label>
            <input type="file" onChange={(e)=> setImage(URL.createObjectURL(e.target.files[0]))} defaultValue={image} />
        </div>
        <div className='mt-4 '>
            <label htmlFor="title">Brand: </label>
            <input type="text" value={brand} onChange={(e)=> setBrand(e.target.value)} />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'
        onClick={handleUpdate}
        >Update</button>
    </div>
  )
}

export default UpdatePage