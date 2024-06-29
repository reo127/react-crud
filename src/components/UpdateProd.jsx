import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const UpdateProd = () => {
  const [fetchProducts, setFetchProducts] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");

  const location = useLocation();
  const prodId = location.pathname.split("/").at(-1);

  const handleProd = async () => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/${prodId}`);
      setFetchProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleProd();
  }, []);

  useEffect(() => {
    if (fetchProducts) {
      setTitle(fetchProducts.title || "");
      setDesc(fetchProducts.description || "");
      setBrand(fetchProducts.brand || "");
    }
  }, [fetchProducts]);

  console.log(fetchProducts);

  const handleUpdate = async () => {
    console.log(title, desc, image, brand);
  }

  return (
    <div>
      <div className='my-4'>
        <label htmlFor="title">title: </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='my-4'>
        <label htmlFor="title">desc: </label>
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <div className='my-4'>
        <label htmlFor="title">image: </label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <div className='my-4'>
        <label htmlFor="title">brand: </label>
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
      </div>
      <button onClick={()=> handleUpdate()}>update</button>
    </div>
  );
};

export default UpdateProd;
