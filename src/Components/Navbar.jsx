import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);


  const logout = () => {
  localStorage.removeItem('user');
  console.log("remove done")
  navigate('/login')
  window.location.reload();
  }

  return (
    <div className="navDiv d-flex align-items-center justify-content-center">
      <div className="navbar d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link to="/" className="link">
            <h1 className="text-light">Auth</h1>
          </Link>
        </div>
        <div className="btn-page">
          {user ? (
            <button className="btn btn-danger rounded-0 text-light" onClick={logout}>
              LogOut
            </button>
          ) : (
            <>
              <Link to="/register" className="link">
                <button className="btn btn-primary rounded-0 text-light">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button className="btn btn-secondary rounded-0 text-light">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
