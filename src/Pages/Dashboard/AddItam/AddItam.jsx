import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from 'react-icons/fa';
import usePublic from "../../../Hooks/usePublic"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import Swal from "sweetalert2";

const img_hosting_key =import.meta.env.VITE_IMG_HOSTING;
// console.log(img_hosting_key);
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
console.log(img_hosting_api);

const AddItam = () => {
    const axiosPublic = usePublic();
     const AxiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm()
    const onSubmit =async (data) =>{
        console.log(data)
        const imgFile = {image :data.image[0]}
   const res = await axiosPublic.post(img_hosting_api,imgFile,{
    headers:{
        'content-type':'multipart/form-data'
    }
    
   })
   console.log(res.data)
   if(res.data.success){
    const menuItem = {
        name:data.name,
        category:data.category,
        price:parseFloat(data.price),
        recipe:data.recipe,
        image:res.data.data.display_url

    }
    const menuRes = await AxiosSecure.post('/menus',menuItem);
    console.log(menuRes.data);
    if(menuRes.data.insertedId){
        Swal.fire({
             
            icon: "success",
            title:`${data.name} add successful`,
            showConfirmButton: false,
            timer: 1500
          });
    }
   }
    }
    return (
        <div>
            <SectionTitle subHeading={'---How many??---'} heading={'MANAGE ALL USERS'}></SectionTitle>
            <div className="bg-slate-200 p-10 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>

                        </label>
                        <input {...register("name")} type="text" placeholder="Recipe name" className="input input-bordered w-full " />

                    </div>

                    <div className="flex gap-3">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">Category*</span>

                            </label>
                            <select defaultValue='default'  {...register("Category")} className="select select-bordered w-full ">
                                <option disabled  value='default'>Select Category?</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soups</option>
                                <option>Desserts</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full  flex-1">
                            <label className="label">
                                <span className="label-text">Price*</span>

                            </label>
                            <input {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="recipe"></textarea>

                    </div>
                    <input {...register("image")} type="file" className="file-input file-input-bordered w-full max-w-xs mt-4" />
                    <div className="mt-4">
                        <button className="btn bg-yellow-600 text-white" type="submit">
                            Add Item
                            <FaUtensils></FaUtensils>
                            </button> 
                         </div>
                </form>
            </div>
        </div>
    );
};

export default AddItam;