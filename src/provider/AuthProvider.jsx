import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    // loader
    const [loading, setLoading] = useState(true);

    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // update user info
    const updateUserInfo = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    // create user with google
    const googleProvider = new GoogleAuthProvider();
    const createUserGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // sign in with email and password
    const loginWithEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // observer
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log('logged in user inside auth state changed observer', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[]);
    
    
    const authInfo = {
        createUser,
        updateUserInfo,
        createUserGoogle,
        loginWithEmailPassword,
        logOut,
        loading,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;