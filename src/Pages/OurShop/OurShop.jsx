import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import shop from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
 import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const OurShop = () => {
    const categories = ['SALAD','PIZZA','SOUPS','DESSERTS','DRINKS'];
    const {category} = useParams();
    console.log(category);
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    console.log(initialIndex);
    const [menu]= useMenu();
    const salad = menu.filter(item=>item.category === 'salad')
    const drinks = menu.filter(item=>item.category === 'drinks')
    const dessert = menu.filter(item=>item.category === 'dessert')
    const pizza = menu.filter(item=>item.category === 'pizza')
    const soup = menu.filter(item=>item.category === 'soup')
     
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <Cover img={shop} heading={'OUR SHOP'} subHeading={'Would you like to try a dish?'}></Cover>
            

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='mt-10 text-center'>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList> 
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
            
        </div>
    );
};

export default OurShop;