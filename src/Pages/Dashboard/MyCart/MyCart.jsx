import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
 


const MyCart = () => {
    const [cart,refetch] = useCart();
   const  axiosSecure = useAxiosSecure();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const handleDelete =(id)=>{
       
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res=>{
                    if(res.data.deletedCount >0){
                         Swal.fire({
                          title: "Deleted!",
                           text: "Your file has been deleted.",
                           icon: "success"
              });
              refetch();
                    }
                })
            }
          });
    }
    return (
        <div>
            <SectionTitle subHeading={'---My Cart---'} heading={'WANNA ADD MORE?'}></SectionTitle>
            <div className="mt-11 shadow-md bg-white p-7">
                <div className="flex justify-around">
                    <p className="text-4xl font-bold uppercase">Total orders : {cart.length}</p>
                    <p className="text-4xl font-bold uppercase">total price : $ {totalPrice}</p>
                  { cart.length? <Link to='/dashboard/reservation'>
                    <button className="btn bg-yellow-600">Pay</button>
                    </Link>:
                     <button disabled className="btn bg-yellow-600">Pay</button>
                    }
                 </div>
                <div>
                <div className="overflow-x-auto mt-6">
                    <table className="table">
                      
                        <thead className="bg-yellow-600 text-white">
                            <tr>
                                <th>
                                   
                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                              {
                                cart?.map((item,index)=> <tr key={item._id}>
                                    <th>
                                        {index +1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </td>
                                    <td>
                                       {item.name}
                                    </td>
                                    <td>$ {item.price}</td>
                                    <th>
                                        <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs bg-red-500 text-white"> 
                                          <RiDeleteBinLine></RiDeleteBinLine>
                                        </button>
                                    </th>
                                </tr>)
                              }

                            
                           
                          
                          
                        </tbody>
                       

                    </table>
                </div>
            </div>
            </div>
          
        </div>
    );
};

export default MyCart;