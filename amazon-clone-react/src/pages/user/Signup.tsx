import axios from "axios"
import { useEffect, useState } from "react"
// import { useState } from "react"


type loI = {
    id: string
    username: string
    password: string
}
function login() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [usernamei, setusername] = useState()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [passwordi, setpassword] = useState<loI>();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/users/`)
    .then((res) => {
        setusername(res.data);      
        setpassword(res.data);
    })
}, [])

const handleLog = () => {
   if('' === usernamei.value){
    alert('t')

   }else{
    alert('f')
   }


}


  return (
    <>
    
<input value={usernamei?.username} onChange={e => setusername(e.target.value)} className="bg-gray-300" type="text" placeholder="wwwwww"/>        
<input value={passwordi?.password} className="bg-gray-300" type="password" placeholder="wwwwww"/>        
<button onClick={handleLog}>submit</button>
    </>
  )
}

export default login