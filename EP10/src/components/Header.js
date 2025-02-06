import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  
  let [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

    return (
      <div className="flex justify-between bg-pink-200  shadow-md px">
        <div className="logo-container">
          <img
            className="w-25"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online status:{onlineStatus ? "hi" : "bye" }</li>
            <li  className="px-4"><Link to="/">Home</Link></li>
            <li  className="px-4"><Link to="/about">About us</Link></li>
            <li  className="px-4"><Link to="/contact">Contact us</Link></li>
            <li  className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li  className="px-4">Menu</li>
            <button className="login" onClick={
              ()=>{
                if(btnNameReact==='Login'){
               
                  return setbtnNameReact("Logout");
                }else{
                  return setbtnNameReact("Login");
                }

              }
            }>{btnNameReact}</button>
          </ul>
        </div>

      </div>
    );
  };

  export default Header;