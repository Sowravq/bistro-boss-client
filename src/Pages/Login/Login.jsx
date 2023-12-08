import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import loginImg from "../../assets/others/authentication2.png"
import loginBgImg1 from "../../assets/others/authentication.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
  
import { Helmet } from "react-helmet";
import { useContext, useEffect,  useState } from 'react';
import { AuthContext } from '../../providers/AuthProvader';
import SociaLogin from '../../components/SociaLogin/SociaLogin';

const Login = () => {
    const{login} = useContext(AuthContext)
    
     const [disabled,setDisabled] = useState(true);
     const navigate = useNavigate();
   const location = useLocation();

   const from = location.state?.from?.pathname || '/';

    useEffect(()=>{
        loadCaptchaEnginge(6); 

    },[])



    const handleValideCaptcha =(e)=>{
        const value = e.target.value;

        if(validateCaptcha(value)){
           setDisabled(false)
        }else{
           setDisabled(true)
        }
    }

    const handleLogin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        login(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(from,{replace: true});
        })
        .catch(error=>{
            console.log(error);
        })
    }
    
    return (
        <div className="px-6 md:px-16 lg:px-36 py-6 md:py-14 lg:py-28" style={{backgroundImage: `url(${loginBgImg1})`}}>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero shadow-5xl" style={{backgroundImage: `url(${loginBgImg1})`}}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <p className=" text-center text-3xl font-semibold p-3">Login Now</p>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control  mt-2">
                            <label className="label">
                            <LoadCanvasTemplate />
                             

                                </label>
                            </div>
                            <div className="form-control">
                                
                                <input onBlur={handleValideCaptcha}  type="text" placeholder="Type captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn bg-yellow-500">Login</button>
                            </div>
                            <p className="text-yellow-600 text-center">New here?Please <Link to='/singUp' className="text-red-600 font-bold">SingUp</Link></p>
                            <p className="text-center text-yellow-600">or Sing in with</p>
                           <Link>
                           <SociaLogin></SociaLogin>
                           </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;