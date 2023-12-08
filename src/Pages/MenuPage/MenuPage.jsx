 
import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import banner3 from "../../assets/menu/banner3.jpg"
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
   

const MenuPage = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item=>item.category === 'salad')
    const drinks = menu.filter(item=>item.category === 'drinks')
    const dessert = menu.filter(item=>item.category === 'dessert')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const soup = menu.filter(item=>item.category === 'soup')
    const offered = menu.filter(item=>item.category === 'offered')
    return (
        <div>
        <Helmet>
         <title>Bistro Boss | Menu</title>
            </Helmet>
                 <Cover
                     img={banner3}
                     heading={'OUR MENU'}
                    subHeading={'WOULD YOU LIKE TO TRY A DISH?'}
                   ></Cover>
                 
                 <div className="mt-16">
                 <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}></SectionTitle>
                 </div>
                   <MenuCategory items={offered} 
                   button={'ORDER YOUR FAVOURITE FOOD'}
                   ></MenuCategory>


                   <MenuCategory items={dessert} 
                   button={'ORDER YOUR FAVOURITE FOOD'}
                   img={dessertImg}
                   title={"DESSERTS"}
                   subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                   ></MenuCategory>
                 
                   
                   <MenuCategory items={pizza} 
                   button={'ORDER YOUR FAVOURITE FOOD'}
                   img={pizzaImg}
                   title={"PIZZA"}
                   subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                   ></MenuCategory>
                 
                   
                   <MenuCategory items={salad} 
                   button={'ORDER YOUR FAVOURITE FOOD'}
                   img={saladImg}
                   title={"SALAD"}
                   subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                   ></MenuCategory>
                 
                   
                   <MenuCategory items={soup} 
                   button={'ORDER YOUR FAVOURITE FOOD'}
                   img={soupImg}
                   title={"SOUPS"}
                   subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                   ></MenuCategory>
                 
                   
              </div>
    );
};

export default MenuPage;


 