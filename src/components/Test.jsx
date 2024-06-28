import React, { useState } from 'react'

const Test = () => {

  const [image, setimage] = useState()
  const [name, setName] = useState("")
  const [sub, setSub] = useState()
  const [user, setUser] = useState([])
  const [index, setindex] = useState(0)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(name === "" || image === "" || sub === "") return;
    user.push({ name, image, sub, index });
    setindex(index + 1);
    console.log(user);
    setName("");
    setimage("");
    setSub("");
  }

  const update = (name, image, sub) => {
    console.log("update")
  }

  const deleteuser = (name) => {
    // const result = user.filter((item) => item.name === name);
    // delete user[result[0]?.index];
    // console.log(result)
    // console.log(user)
    const filteredPeople = user.filter((item) => item.name !== name);
    console.log(filteredPeople[0].index)
  }

  return (
   <>
    <div>
      <div>
        <input type="file" onChange={(e) => setimage(URL.createObjectURL(e.target.files[0]))} />
      </div>
      <div>
        <label>name</label>
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} />
      </div>
      <div className="col-span-full sm:col-span-3">
        <input type="radio" id="html" name="fav_language" value="HTML"
          onChange={(e) => setSub(e.target.value)}
        />
        <label htmlFor="html">HTML</label><br />
        <input type="radio" id="css" name="fav_language" value="CSS"
          onChange={(e) => setSub(e.target.value)}
        />
        <label htmlFor="css">CSS</label><br />
        <input type="radio" id="javascript" name="fav_language" value="JavaScript"
          onChange={(e) => setSub(e.target.value)}
        />
        <label htmlFor="javascript">JavaScript</label>
      </div>
      <button onClick={handleFormSubmit}>Submit</button>
    </div>


    <ul className='mt-12 bg-blue-400 p-4'>
      {user.map((user) => (
        <li key={user.name} className='mt-4'>
          <p>{user.index}</p>
          <p>{user.name}</p>
          <p>{user.image}</p>
          <p>{user.sub}</p>
          <button onClick={() => update(user.name, user.image, user.sub)} className='mx-2'>Update</button>
          <button onClick={() => deleteuser(user.name)}>Delete</button>
        </li>
      ))}
    </ul>
   </>
  )
}

export default Test