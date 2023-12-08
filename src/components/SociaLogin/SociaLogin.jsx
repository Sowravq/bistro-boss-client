import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvader";
import usePublic from "../../Hooks/usePublic";
import { useNavigate } from "react-router-dom";

const SociaLogin = () => {
    const {googleLogin} = useContext(AuthContext);
    const navigate = useNavigate()
 const axiosPublic = usePublic()
    const handleGoogleLogin=()=>{
       
    googleLogin()
    .then(result=>{
        console.log(result.user);
        const userInfo = 
        { 
            email:result.user?.email,
            name:result.user?.displayName
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
          console.log(res.data);
        })
       navigate('/')
    })
     .catch(error=>{
        console.log(error);
     })
    }
    return (
        <div className="flex justify-center items-center gap-7 text-3xl">
                           <FaFacebook></FaFacebook>
                            <FaGoogle onClick={handleGoogleLogin}></FaGoogle>
                            <FaGithub></FaGithub>
                         </div>
    );
};

export default SociaLogin;