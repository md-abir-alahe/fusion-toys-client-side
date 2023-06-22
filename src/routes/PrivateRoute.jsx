import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <button className=" mx-auto my-16 btn loading">loading</button>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={{from: location}} to={`/login`} replace></Navigate>
};

export default PrivateRoute;