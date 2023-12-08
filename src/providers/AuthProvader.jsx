import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import usePublic from "../Hooks/usePublic";

const provider = new GoogleAuthProvider();

 export const AuthContext = createContext();
const AuthProvader = ({children}) => {
    const axiosPublic = usePublic();
    const [information,setInformation]= useState();
    const [loading,setLoading] = useState(true);


    const singUp = (email,password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password)=>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logout =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user) =>{
            console.log(user);
            setInformation(user)
            
            if(user){
                const userInfo = {email: user.email}
                    axiosPublic.post('/jwt',userInfo)
                    
                    .then(res=>{
                       
                        if(res.data.token){
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            }
            else{
                 localStorage.removeItem('access-token')
            }
            setLoading(false)
        }) 
        return ()=>unsubscribe;
    },[axiosPublic])

    const info = {
        singUp,
        login,
        logout,
        googleLogin,
        information,
        loading
    } ;
    return (
        <div>
           <AuthContext.Provider value={info}>
           {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvader;