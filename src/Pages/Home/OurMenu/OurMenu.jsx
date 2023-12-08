import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
 

const OurMenu = () => {
    return (
        <div className="hero w-full bg-fixed" style={{backgroundImage:`url(${featured})`}}>
            <div className="hero-overlay bg-opacity-50  ">
            <div className="mt-24 mb-10 text-white">
            <SectionTitle 
            subHeading={'---Check it out---'}
            heading={'FROM OUR MENU'}
            >

            </SectionTitle>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 max-w-4xl mx-auto mb-24 bg-slate-500 bg-opacity-40 text-white">

             <div>
                <img src={featured} alt="" />
             </div>
            <div>
                <p className="text-xl font-medium">March 20, 2023</p>
                <p className="text-2xl font-semibold">WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <div className="mt-4">
                <button className="btn btn-active border-b-4 text-white bg-slate-400 border-white border-t-0 border-x-0 bg-opacity-30">View Full  Menu</button>
                </div>
            </div>

            </div>
            </div>
        </div>
    );
};

export default OurMenu;