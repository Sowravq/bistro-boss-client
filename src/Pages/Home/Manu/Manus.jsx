import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "./MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
 
  
 const Manus = () => {

const [menu] = useMenu();
const popular = menu.filter(item=>item.category === 'popular')

    return (
         <section  >
           <SectionTitle
             subHeading={'---Check it out---'}
             heading={'FROM OUR MENU'}
           
           >
 
 
           </SectionTitle>

           <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
           {
                popular?.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
               }
           </div>

           <div className="flex justify-center items-center mt-6 mb-10">
           <button className="btn btn-active border-b-4 bg-white border-black border-t-0 border-x-0">View Full  Menu</button>

           </div>

         </section>
    );
 };
 
 export default Manus;