import { useQuery } from "@tanstack/react-query"
// import { useEffect, useState } from "react"
import usePublic from "./usePublic"

const useMenu =()=>{
  const axiosPublic =  usePublic();
  // const [menu,setMenu] = useState([]);
  // const [loading,setLoading] = useState(true);
  // useEffect(()=>{
  //   fetch('http://localhost:5000/menus')
  //   .then(res=>res.json())
  //   .then(data=>{
  //       setMenu(data)
  //       setLoading(false)
  //   })
  //  },[])
const {data: menu=[],refetch} =useQuery({
  queryKey:['menu'],
  queryFn: async()=>{
    const res = await axiosPublic.get('/menus')
    return res.data
  }
})

return [menu,refetch]
}
export default useMenu