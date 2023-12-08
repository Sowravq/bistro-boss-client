import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvader";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
 

 
const ShopFood = ({item}) => {
    const {recipe,image,name,price,_id}=item;
    const {information}= useContext(AuthContext);
    const [,refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure= useAxiosSecure()
    const handleAddCart=()=>{
        // console.log(cart,information.email);
        if(information && information.email){
            const cartItem = {
                cartId:_id,
                email:information.email,
                name,
                image,
                price
            }
             
     axiosSecure.post('/carts',cartItem)
     .then(res=>{
        console.log(res.data);
        if(res.data.insertedId){
            Swal.fire({
                // position: "top",
                icon: "success",
                title: `${name} add successfully`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch();
        }
     })
        }
        else{
            Swal.fire({
                title: "You are not Login?",
                text: "Please login and add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from:location}})
                }
              });
            
        }
    }
    return (
        <div className="card   bg-base-200  rounded-none">
        <figure className=" ">
            <img src={image} alt="Shoes" className="  object-cover w-full h-[300px]" />
            <p className="absolute bg-black text-white p-2 ml-60 -mt-60">{price}</p>
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title uppercase">{name}</h2>
            <p>
                {recipe}
            </p>
            <div className="card-actions">
            <button onClick={handleAddCart} className="btn btn-active border-b-4 text-yellow-600 bg-slate-400 border-yellow-600 border-t-0 border-x-0 bg-opacity-30 hover:bg-blac">Add to cart</button>
            </div>
        </div>
    </div>
    );
};

export default ShopFood;