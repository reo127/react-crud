
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { ProductService } from './service/ProductService';

export default function DataTableComponent() {
    const [products, setProducts] = useState([{
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboohfhgfhfhgfh Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },]);

    // useEffect(() => {
    //     ProductService.getProductsMini().then(data => setProducts(data));
    // }, []);

    return (
        <div className="card bg-white text-black">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}  color='#343434'>
                <Column field="code" headerClassName='bg-slate-200 py-3' header="Code" className='py-4'></Column>
                <Column field="name" header="Name" headerClassName='bg-slate-200 py-3' className='py-4'></Column>
                <Column field="category" header="Category" headerClassName='bg-slate-200 py-3' className='py-4'></Column>
                <Column field="quantity" header="Quantity" headerClassName='bg-slate-200 py-3' className='py-4'></Column>
            </DataTable>
        </div>
    );
}
        