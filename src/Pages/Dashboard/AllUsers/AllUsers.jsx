import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

 

const AllUsers = () => {
    
    const axiosSecure = useAxiosSecure();
     const {data: users=[],refetch} = useQuery({
        queryKey :['users'],
        queryFn: async()=>{
          const res = await axiosSecure.get('/users');
          return res.data;
        }
     })

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
                axiosSecure.delete(`/users/${id}`)
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


     const handleChangeRole =(id)=>{
        axiosSecure.patch(`/users/admin/${id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:`${id.name} is an admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
            }
        })
     }
    return (
        <div>
        <SectionTitle subHeading={'---How many??---'} heading={'MANAGE ALL USERS'}></SectionTitle>
        <div className="mt-11 shadow-md bg-white p-7">
            <div className="">
                <p className="text-4xl font-bold uppercase">Total users : {users.length} </p>
                 
            </div>
            <div>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                  
                    <thead className="bg-yellow-600 text-white">
                        <tr>
                            <th>
                               
                            </th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                          {
                            users?.map((item,index)=> <tr key={item._id}>
                                <th>
                                    {index +1}
                                </th>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                   {item.email}
                                </td>
                                <td>
                                { item.role ==='admin'?<p className="text-cyan-500">Admin</p>:
                                    <button onClick={()=>handleChangeRole(item._id)} className="btn btn-ghost btn-xs bg-yellow-600 text-white"> 
                                <FaUser></FaUser>
                                    </button>}
                                  
                                </td>
                                <th>
                                    <button onClick={()=>handleDelete(item._id)}  className="btn btn-ghost btn-xs bg-red-500 text-white"> 
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

export default AllUsers;