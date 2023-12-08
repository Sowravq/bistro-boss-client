/* eslint-disable react/prop-types */
import ShopFood from "../ShopFood";

 

const OrderTab = ({items}) => {
    return (
        <div className="max-w-5xl mx-auto mb-16 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
           items?.map(item=><ShopFood key={item._id} 
            item={item}>
            </ShopFood>) 
        }
        </div>
    );
};

export default OrderTab;