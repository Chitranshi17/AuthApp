import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const Home = () => {

const {user} = useSelector(state => state.auth);

const navigate = useNavigate();

useEffect(()=>{
  if(!user){
    navigate("/login")
  }
},[user])

  return (
    <div className='home'>
      <div className="homeSec"></div>
    </div>
  )
}

export default Home