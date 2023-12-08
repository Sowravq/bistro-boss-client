
import loginImg from "../../assets/others/authentication2.png"
import loginBgImg1 from "../../assets/others/authentication.png"
import { Link } from "react-router-dom";
  
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvader";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import usePublic from "../../Hooks/usePublic";
import SociaLogin from "../../components/SociaLogin/SociaLogin";

const SingUp = () => {
    const {singUp} = useContext(AuthContext)
      const axiosPublic = usePublic();
  const handleSingUp = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);
    singUp(email,password)
    .then(result=>{
        console.log(result.user);
        updateProfile(auth.currentUser, {
            displayName: name 
          }).then(() => {
             console.log('update success');

             const userInfo = {name:name,email:email}
              axiosPublic.post('/users',userInfo)
              .then(res=>{
                console.log(res.data);
              })

          }).catch((error) => {
            console.log(error);
          });
    })
    .catch(error=>{
        console.log(error);
    })
  }
    return (
        <div className="px-6 md:px-16 lg:px-36 py-6 md:py-14 lg:py-28" style={{backgroundImage: `url(${loginBgImg1})`}}>
            <Helmet>
                <title>Bistro Boss | SingUp</title>
            </Helmet>
        <div className="hero shadow-5xl" style={{backgroundImage: `url(${loginBgImg1})`}}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <p className=" text-center text-3xl font-semibold p-3">Sing Up Now</p>
                    <form onSubmit={handleSingUp} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                           
                        </div>
                    
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-yellow-500">SingUp</button>
                        </div>
                        <p className="text-yellow-600 text-center">Already have an account?Please <Link to='/login' className="text-red-600 font-bold">Login</Link></p>
                        <p className="text-center text-yellow-600">or Sing up with</p>
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

export default SingUp;