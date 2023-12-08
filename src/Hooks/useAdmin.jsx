import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvader";
import useAxiosSecure from "./useAxiosSecure";

 

const useAdmin = () => {
    const {information} = useContext(AuthContext);
    
    const axiosSecure = useAxiosSecure()
    const {data:isAdmin= false,isPending:isLoadingAdmin} = useQuery({
        queryKey:[information?.email,'isAdmin'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/admin/${information.email}`)
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin,isLoadingAdmin]
};

export default useAdmin;