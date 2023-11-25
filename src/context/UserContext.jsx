import React, { createContext } from 'react';



export const AuthContext = createContext();

const UserContext = ({ chilren }) => {

    const authInfo ={
        name:'Rahul '
    }

    return (
       <AuthContext.Provider value={authInfo}>
             {chilren}
       </AuthContext.Provider>
    );
};

export default UserContext;