import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../features/auth/authSlice";


const Login = () => {

  const dispatch = useDispatch();

  const { user , isSuccess ,  isLoading , isError , message } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [loginFormData , setLoginFormData] = useState({
    email : "",
    password : "",
  })

  const {email , password} = loginFormData;
  
  const handleChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name] : e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Is Done")
    // dispatch(loginUser(loginFormData));
    if(!user){
      dispatch(loginUser(loginFormData))
    }else{
        // toast.error(message);
        // window.alert("User Not Found , First You Register And Create Your Account")
        toast.error("User Not Found , First You Register And Create Your Account")
    }
  }
  useEffect(()=>{
    if(user && isSuccess){
        navigate("/")
    }
    if(isError && message){
      toast.error(message);
    }
  },[user , isSuccess , isError , message])

  if (isLoading) {
    return (
      <div className="loadingCode">
        <h1 className="text-center text-secondary display-1">Loading....</h1>
      </div>
    );
  }

  return (
    <div className="login">
      <div className="heading">
        <h3 className="text-light">Login</h3>
      </div>
      <div className="loginForm">
        <div className="formDesign">
          <form action="" onSubmit={handleSubmit}>
            <div className="input form-control">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Here"
                className="p-2  mt-1"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="input form-control">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password Here"
                className="p-2  mt-1"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="input form-control">
              <button className="btn btn-primary rounded-0  mt-1">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
