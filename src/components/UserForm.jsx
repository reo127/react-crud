import React, { useState } from 'react'

const UserForm = () => {
    let dbuser = {
        name: "",
        eamil: "",
        profilePic: [],
        gender: "",
        cuntry: "",
        tandc: false
    }


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [profilePic, setProfilePic] = useState();
    const [gender, setGender] = useState("");
    const [cuntry, setCuntry] = useState("");
    const [tandc, setTandc] = useState(false);
    const [index, setIndex] = useState(0)
    const [user, setUser] = useState([])

    const handelsubmint = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(profilePic);
        console.log(gender);
        console.log(cuntry);
        console.log(tandc);
        user.push({ name, email, profilePic, gender, cuntry, tandc, index });
        setIndex(index + 1);
        console.log(user);
        setName("");
        setEmail("");
        setProfilePic("");
        setGender("");
        setCuntry("");
        setTandc(false);
    }


    return (
        <>
            <div>
                <div>
                    <label htmlFor="username">user: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">email: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="image">image: </label>
                    <input type="file" onChange={(e) => setProfilePic(URL.createObjectURL(e.target.files[0]))} />
                </div>
                <div className="col-span-full sm:col-span-3" onChange={(e) => setGender(e.target.value)}>
                    <input type="radio" id="html" name="fav_language" value="HTML"

                    />
                    <label htmlFor="html">HTML</label><br />
                    <input type="radio" id="css" name="fav_language" value="CSS"

                    />
                    <label htmlFor="css">CSS</label><br />
                    <input type="radio" id="javascript" name="fav_language" value="JavaScript"

                    />
                    <label htmlFor="javascript">JavaScript</label>
                </div>
                <div>
                    <label htmlFor="contry">contry: </label>
                    <input type="text" value={cuntry} onChange={(e) => setCuntry(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="contry">tums and conditions </label>
                    <input type="checkbox" value={tandc} onChange={(e) => setTandc(e.target.value)} />
                </div>

                <button onClick={handelsubmint}>Submit</button>
            </div>


            {user.map((items, i) => {
                return (
                    <ul className='bg-blue-300 p-4 mt-2 rounded-md' key={i}>
                        <input type="text" value={items.name} />
                        <input type="email" value={items.email} />
                        <input type="file" value={items.profilePic} />

                        <div className="col-span-full sm:col-span-3" onChange={(e) => setGender(e.target.value)} defaultChecked={items.gender}>
                            <input type="radio" id="html" name="fav_language" value="HTML"

                            />
                            <label htmlFor="html">HTML</label><br />
                            <input type="radio" id="css" name="fav_language" value="CSS"

                            />
                            <label htmlFor="css">CSS</label><br />
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript"

                            />
                            <label htmlFor="javascript">JavaScript</label>
                        </div>

                        <input type="text" value={items.cuntry} />
                        <input type="text" value={items.tandc} />
                        <button>Update</button>
                    </ul>
                )
            })}
        </>
    )
}

export default UserForm