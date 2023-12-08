import { RiDeleteBinLine } from "react-icons/ri";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
 
 
const ManageItem = () => {
    const [menu,refetch] = useMenu();
    
    const axiosSecure = useAxiosSecure();
    const handleDelete =(item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
           const res = await axiosSecure.delete(`/menus/${item._id}`)
               
                    if(res.data.deletedCount >0){
                         Swal.fire({
                          title: "Deleted!",
                           text:`${item.name} item has been deleted.`,
                           icon: "success"
              });
              refetch();
                    }
               
            }
          });
    }

    return (
        <div>
        <SectionTitle subHeading={'---Hurry Up!---'} heading={'MANAGE ALL ITEMS'}></SectionTitle>
        <div className="mt-11 shadow-md bg-white p-7">
            <div className="">
                <p className="text-4xl font-bold uppercase">Total Items : {menu.length}</p>
                
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
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                          {
                            menu?.map((item,index)=> <tr key={item._id}>
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
                                <button   className="btn btn-ghost btn-xs bg-yellow-600 text-white"> 
                                 <FaRegEdit></FaRegEdit>
                                </button>
                            </th>
                            <th>
                                <button  onClick={()=>handleDelete(item)} className="btn btn-ghost btn-xs bg-red-500 text-white"> 
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

export default ManageItem;