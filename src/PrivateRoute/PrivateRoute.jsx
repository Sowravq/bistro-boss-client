import { useContext } from "react";
import  { AuthContext } from "../providers/AuthProvader";
import { Navigate, useLocation } from "react-router-dom";
 
 
const PrivateRoute = ({children}) => {
    const {information,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        
      return <div className="flex justify-center items-center mt-40 mb-40">
        <span className="loading loading-spinner loading-lg"></span>
      </div>  
    }
    if(information){
    return children;
    }
    return (
        <div>
           

            <Navigate to='/login' state={{from:location}} replace></Navigate>
        </div>
    );
};

export default PrivateRoute;