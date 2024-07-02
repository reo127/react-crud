import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ title, desc, image, brand, pid }) => {
	return (
		<>

			<div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
				<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
				<div className="mt-6 mb-2">
					<span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-600">{brand} - {pid} </span>
					<h2 className="text-xl font-semibold tracking-wide">{title}</h2>
				</div>
				<p className="dark:text-gray-800">{desc}</p>
				<div className='mt-4'>
					<Link to={`/update/${pid}`}>
						<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4'>Update</button>
					</Link>
					<Link to={`/delete/${pid}`}>
						<button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-4'>delete</button>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Card