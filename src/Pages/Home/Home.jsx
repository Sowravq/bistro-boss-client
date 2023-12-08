import { Helmet } from "react-helmet";
import Banar from "./Banar/Banar";
import BistroTitle from "./BistroTitle/BistroTitle";
import Category from "./Catagory/Category";
import Contact from "./Contact/Contact";
import Manus from "./Manu/Manus";
import OurMenu from "./OurMenu/OurMenu";
import RecommendCart from "./RecommendCart/RecommendCart";
import Reviews from "./Reviews/Reviews";

 

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banar></Banar>
            <Category></Category>
            <BistroTitle></BistroTitle>
            <Manus></Manus>
            <Contact></Contact>
            <RecommendCart></RecommendCart>
            <OurMenu></OurMenu>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;