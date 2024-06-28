import React, { useState } from 'react'

const Multifiled = () => {
        const [firstname, setFirstname] = useState("");
        const [lastname, setLastname] = useState("");
        const [email, setEmail] = useState("");
        const [image, setimage] = useState();
        const [setsubject, setSetsubject] = useState();
        const [address, setaddress] = useState("");
        const [city, setCity] = useState("");
        const [state, setState] = useState("");
        const [zip, setZip] = useState();

        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log(firstname, lastname, email, image, setsubject, address, city, state, zip)
        }


    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Personal Inormation</p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">First name</label>
                            <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-blue-600 dark:border-gray-300"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Last name</label>
                            <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-blue-600 dark:border-gray-300"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-blue-600 dark:border-gray-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="col-span-full sm:col-span-3 text-black" >
                            <label htmlFor="email" className="text-sm">Profile image</label>
                            <input id="image" type="file" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-blue-600 dark:border-gray-300"
                            onChange={(e) => {console.log(e.target.files[0]); setimage(e.target.files[0])}}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                        <input type="radio" id="html" name="fav_language" value="HTML"
                        
                        />
                         <label htmlFor="html">HTML</label><br/>
                         <input type="radio" id="css" name="fav_language" value="CSS"
                        
                        />
                         <label htmlFor="css">CSS</label><br/>
                         <input type="radio" id="javascript" name="fav_language" value="JavaScript"
                        
                        />
                        <label htmlFor="javascript">JavaScript</label>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Address</label>
                            <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-blue-600 dark:border-gray-300"
                            value={address}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm">City</label>
                            <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-blue-600 dark:border-gray-300"
                            value={city}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">State / Province</label>
                            <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-blue-600 dark:border-gray-300"
                            value={state}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                            <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-blue-600 dark:border-gray-300"
                            value={zip}
                            />
                        </div>
                    <button className='bg-blue-400' onClick={handleSubmit}>Submit</button>
                    </div>
                </fieldset>
                
            </form>
        </section>
    )
}

export default Multifiled