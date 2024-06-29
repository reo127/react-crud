import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ title, desc, image, brand, id }) => {
	return (
		// <Link>
			<div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
				<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
				<div className="mt-6 mb-2">
					<span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-600">{brand}</span>
					<h2 className="text-xl font-semibold tracking-wide">{title}</h2>
				</div>
				<p className="dark:text-gray-800">{desc}</p>
				<div className='flex gap-8'>
					<Link to={`/update/${id}`}>
					<button className="block w-full px-4 py-2 mt-4 font-semibold tracking-wide rounded-md dark:bg-yellow-400 dark:text-gray-900">update</button>
					</Link>
					<Link to={`/delete/${id}`}>
					<button className="block w-full px-4 py-2 mt-4 font-semibold tracking-wide rounded-md dark:bg-red-600 dark:text-gray-900">delete</button>
					</Link>
				</div>
			</div>
		// </Link>
	)
}

export default Card