import React, { useContext } from 'react';
import logoImg from '../../assets/canal10.png';
import { AuthContext } from '../../context/AuthContext';
import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';

export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="container-fluid navbar bg-info">
      <div className="container-fluid">
        <div className="navbar-brand">
          {/* <img src={logoImg} alt="logo" height="50" /> */} OXXO
        </div>
        <div className="d-flex">
          <div className="col">
            {currentUser ? (
              <>
                <div className="btn">
                  {currentUser.email.slice(0, -10)}
                </div>
                <div onClick={() => logout()} className="btn">
                  salir
                </div>
              </>
            ) : (
              <>
                <LoginComp />
                <RegisterComp />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
