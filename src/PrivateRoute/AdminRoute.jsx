import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvader";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

 

 

const AdminRoute = ({children}) => {
    const {information,loading} = useContext(AuthContext);
    const [isAdmin,isLoadingAdmin] = useAdmin();
    const location = useLocation();
    if(loading || isLoadingAdmin){
        
      return <div className="flex justify-center items-center mt-40 mb-40">
        <span className="loading loading-spinner loading-lg"></span>
      </div>  
    }
    if(information && isAdmin){
    return children;
    }
    return (
        <div>
           

            <Navigate to='/login' state={{from:location}} replace></Navigate>
        </div>
    );
    
};

export default AdminRoute;