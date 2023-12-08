import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvader";

 
const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const {information} = useContext(AuthContext)
    const {refetch, data: cart = []}= useQuery({
    queryKey: ['cart',information?.email],
    queryFn: async ()=>{
        const res = await axiosSecure.get(`/carts?email=${information.email}`)
        return res.data;
    }
    })
    return [cart,refetch]
};

export default useCart;