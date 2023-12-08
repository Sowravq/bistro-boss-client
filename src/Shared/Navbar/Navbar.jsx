 import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvader";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../Hooks/useCart";

const Navbar = () => {
    const{logout,information}=useContext(AuthContext);
    const [cart] = useCart();
    const handleLogout=()=>{
        logout()
       .then(()=>{
        console.log('logout success');
       })
       .catch(error=>{
        console.log(error);
       })
    }
const links = <>
 <li><NavLink to='/'>Home</NavLink></li>
 <li><NavLink to='/menu'>Our Menu</NavLink></li>
 <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
 <li><NavLink to='/ourShop'>Our Shop</NavLink></li>
 <li><NavLink to='/secret'>Secret</NavLink></li>
 <li><Link to='/dashboard'>
 <button className="">
   <div className="flex gap-2 items-center">
   <FaShoppingCart></FaShoppingCart>
  <div className="badge badge-secondary">+{cart.length}</div>
   </div>
</button></Link></li>
  {
    information? <li onClick={handleLogout}><Link>Logout</Link></li>
    :
     
    <li><NavLink to='/login'>Login</NavLink></li>
  }
</>

    return (
        <div>
             
            <div className="fixed z-10  navbar bg-black bg-opacity-60 max-w-7xl  text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS <br /> R e s t a u r a n t</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
               
            </div>
        </div>
    );
};

export default Navbar;