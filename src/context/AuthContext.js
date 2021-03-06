import { createContext, useEffect, useState } from 'react';
import { authApp, firestoreApp } from '../config/firebase';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

  let auctions = Date.parse(new Date().toDateString())+'si'
  
  const [currentUser, setCurrentUser] = useState(null);

  const register = (email, password) => {
    return authApp.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return authApp.signInWithEmailAndPassword(email+'@gmail.com', password);
  };

  const logout = () => {
    return authApp.signOut();
  };

  const bidAuction = (auctionId, kl) => {

    const db = firestoreApp.collection(auctions);

    return db.doc(auctionId).update({
      monitor:true,
    });
  };

  const atender = (auctionId, kl) => {

    const db = firestoreApp.collection(auctions);

    return db.doc(auctionId).update({
      atendio:kl,
    });
  };
/* 
  const noteContext = (auctionId, note) => {

    const db = firestoreApp.collection('auctions');

    return db.doc(auctionId).update({
      note:note
    });
  }; */


   useEffect(() => {
    const subscribe = authApp.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return subscribe;
  }, []); 


  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        bidAuction,
        atender
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
