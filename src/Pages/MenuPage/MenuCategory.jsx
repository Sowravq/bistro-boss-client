/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../Home/Manu/MenuItem/MenuItem";

 
const MenuCategory = ({items,title,button,img,subTitle}) => {
    return (
      <section>
          {title? <div className="mb-14 mt-20">
                     <Cover
                     img={img}
                     heading={title}
                    subHeading={subTitle}
                   ></Cover>
        </div>:''}
        
           <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {
             items?.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>

        <div className="flex justify-center items-center mt-6 mb-10">
       <Link to={`/ourShop/${title}`}>
       <button className="btn btn-active border-b-4 bg-white border-black border-t-0 border-x-0">{button}</button>
       </Link>

        </div>
       
      </section>
    );
};

export default MenuCategory;