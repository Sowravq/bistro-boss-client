import {  FaAddressCard, FaBook, FaCalendar, FaHome, FaShoppingCart, FaSwatchbook } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlinePreview } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [isAdmin] =useAdmin();
    console.log(isAdmin);
    // const isAdmin = true;
    return (
        <div className="flex">
            <div className="bg-yellow-600 p-10">
                <p className="text-3xl font-bold">BISTRO BOSS <br /><span className="uppercase text-xl font-bold">R e s t a u r a n t</span></p>

                <ul className="mt-9">
                   {
                    isAdmin?<>

                   <li className="flex items-center gap-2" >
                        <FaHome></FaHome>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white uppercase" : "uppercase"
                        } to='/dashboard'>Admin home</NavLink>
                    </li>
                    
                    <li className="flex items-center gap-2 mt-4">
                    <FaAddressCard></FaAddressCard>
                        <NavLink to='/dashboard/addItems' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white uppercase" : "uppercase"
                        }>add items</NavLink>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                      <CiMenuBurger></CiMenuBurger>
                        <NavLink to='/dashboard/manageItems' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white uppercase" : "uppercase"
                        }>manage items</NavLink>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                   <FaBook></FaBook>
                        <NavLink to='/dashboard/ManageBookings' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white uppercase" : "uppercase"
                        }>Manage bookings</NavLink>
                    </li>
                   
                    <li className="flex items-center gap-2 mt-4">
                   <FaSwatchbook></FaSwatchbook>
                        <NavLink to='/dashboard/allUsers' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white uppercase" : "uppercase"
                        }>All users</NavLink>
                    </li>
                    
                    </>:
                    <>
                      <li className="flex items-center gap-2" >
                        <FaHome></FaHome>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white uppercase" : "uppercase"
                        } to='/dashboard'>User home</NavLink>
                    </li>
                    
                    <li className="flex items-center gap-2 mt-4">
                        <FaCalendar></FaCalendar>
                        <NavLink to='/dashboard/reservation' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white uppercase" : "uppercase"
                        }>Reservation</NavLink>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                        <RiSecurePaymentLine></RiSecurePaymentLine>
                        <NavLink to='/dashboard/paymentHistory' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white uppercase" : "uppercase"
                        }>payment history</NavLink>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                    <FaShoppingCart></FaShoppingCart>
                        <NavLink to='/dashboard/myCart' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white uppercase" : "uppercase"
                        }>My cart</NavLink>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                    <MdOutlinePreview></MdOutlinePreview>
                        <NavLink to='/dashboard/addReview' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white uppercase" : "uppercase"
                        }>Add review</NavLink>
                    </li>
                    <li className="flex items-center gap-2 mt-4">
                   <FaSwatchbook></FaSwatchbook>
                        <NavLink to='/dashboard/myBooking' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white uppercase" : "uppercase"
                        }>My booking</NavLink>
                    </li>
                    </>
                   }
                    <div className="divider"></div>
                    <li className="flex items-center gap-2" >
                        <FaHome></FaHome>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white uppercase" : "uppercase"
                        } to='/'>home</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-14">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;