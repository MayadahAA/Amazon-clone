import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useState } from "react"

// type loI = {
//     id: string
//     username: string
//     password: string
// }
function login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [usernam, setusername] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [passwor, setpassword] = useState();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/users/`).then((res) => {
      setusername(res.data.username);
      setpassword(res.data.password);
    });
  }, []);

  const handleLog = () => {
    if ("" === usernam && "" === passwor) {
      alert("t");
    } else {
      alert("f");
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex gap-4 h-fit p-10 rounded-md border-2 w-1/2 m-auto mt-20 flex-col items-center justify-center  ">
        <input
          value={usernam}
          onChange={(e) => setusername(e.target.value)}
          className="bg-slate-100 p-2 rounded-sm "
          type="text"
          placeholder="username"
        />
        <input
        onChange={(e) => setusername(e.target.value)}
          value={passwor}
          className="bg-slate-100 p-2 rounded-sm "
          type="password"
          placeholder="password"
        />
        <button onClick={handleLog} className="bg-yellow-500 p-1 text-white font-medium rounded-sm">submit</button>
      <Link className="text-center flex " to={'/signup'}>
        <p className="text-slate-500 text-sm">you do not have account? </p>
        <button className="text-sm text-blue-600 px-2">signup</button>
      </Link>
      </div>
    </div>
  );
}

export default login;
