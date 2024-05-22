import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../features/auth/authSlice';
// import { registerUser } from '../features/auth/authSlice';

const Register = () => {

    // Getting Data form Auth State
    const {user , isSuccess  , isLoading , isError , message} = useSelector(state => state.auth);

    // Intializing Hooks
    const navigate = useNavigate();

    // Dispatch Initialize

    const dispatch = useDispatch();

    // Form State
    const [formData , setFormData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
    });

    // Destructure State
    const {name , email , password , confirmPassword} = formData;

    // Form State Logic
    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.name] : e.target.value,
            }
        )
    }

    // Form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
                toast.error("Password is not Match !!")
        }

        dispatch(
            registerUser(formData)
        )
    }
    

  useEffect(()=>{
    if(user || isSuccess){
        navigate("/")
    }
    if(isError && message){
        toast.error(message);
    }
  },[user , isSuccess , isError, message])

    if(isLoading){
        return (
            <div className="loadingCode">
                            <h1 className='text-center text-secondary display-1'>Loading....</h1>
            </div>
        )
    }


    

  return (
    <div className='register'>
        <div className="heading">
        <h3 className="text-light">Register</h3>
        </div>
        <div className="regForm">
            <div className="formDesign">
                <form action="" onSubmit={handleSubmit} >
                    <div className="input form-control">
                        <label htmlFor="">UserName</label>
                        <input type="text" placeholder='Enter Name Here' className='p-2  mt-1'
                        name='name'
                        value={name}
                        onChange={handleChange}/>
                    </div>
                    <div className="input form-control">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter Email Here' className='p-2  mt-1'
                        name='email'
                        value={email}
                        onChange={handleChange}/>
                    </div>
                    <div className="input form-control">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Enter Password Here' className='p-2  mt-1'
                        name='password'
                        value={password}
                        onChange={handleChange}/>
                    </div>
                    <div className="input form-control">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" placeholder='Confirm Password Here' className='p-2 mt-1' 
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}/>
                    </div>
                    <div className="input form-control">
                        <button className="btn btn-primary rounded-0  mt-1">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
