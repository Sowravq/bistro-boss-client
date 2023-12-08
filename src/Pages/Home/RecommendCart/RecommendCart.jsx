import SectionTitle from "../../../components/SectionTitle/SectionTitle";
 import img1 from "../../../assets/home/slide1.jpg"
 import img2 from "../../../assets/home/slide2.jpg"
 import img3 from "../../../assets/home/slide3.jpg"

const RecommendCart = () => {
    return (
        <div>
            <SectionTitle
                subHeading={'---Should Try---'}
                heading={'CHEF RECOMMENDS'}
            >
               

            </SectionTitle>

            <div className=" max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 mt-16">
                    <div className="card   bg-base-200  ">
                        <figure className=" ">
                            <img src={img1} alt="Shoes" className="  object-cover w-full h-[300px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                            <button className="btn btn-active border-b-4 text-yellow-600 bg-slate-400 border-yellow-600 border-t-0 border-x-0 bg-opacity-30">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card   bg-base-200  ">
                        <figure className=" ">
                            <img src={img2} alt="Shoes" className="  object-cover w-full h-[300px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Pizza</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                            <button className="btn btn-active border-b-4 text-yellow-600 bg-slate-400 border-yellow-600 border-t-0 border-x-0 bg-opacity-30">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card   bg-base-200  ">
                        <figure className=" ">
                            <img src={img3} alt="Shoes" className="  object-cover w-full h-[300px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Coffee</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                            <button className="btn btn-active border-b-4 text-yellow-600 bg-slate-400 border-yellow-600 border-t-0 border-x-0 bg-opacity-30">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default RecommendCart;