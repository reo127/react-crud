
import { useEffect, useState } from "react";
import Card from "./Card"
import axios from "axios";


const Products = () => {
     /*
  install axios
  crete state variable for storing all products
  create a function for fetching data using axios
  call the functions inside useEffect
   using a map function loop the products
  */ 
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

// codeiu

  const fetchdata = async () => {
    const data = await axios.get("https://apisaga.vercel.app/random/products/5")
    setProducts(data.data)
  }

  

  console.log(products)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
    {
       products.map((product, index) => {
         return (
           <Card title={product?.title} desc={product?.description} image={product?.thumbnail} brand={product?.brand} key={index} />
         )
       })
     }
    </div>
  )
}

export default Products