
const Cover = ({img,heading,subHeading}) => {
    return (
        <div className="hero h-[700px] bg-fixed" style={{ backgroundImage: `url(${img})` }}>
            <div className="lg:max-w-4xl "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="p-8 lg:p-0 px-0 md:px-40 md:mx-8 lg:mx-20 bg-black text-white lg:px-[350px] lg:py-28 mt-10 bg-opacity-60">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
                    <p className="mb-5">{subHeading}</p>
                 </div>
            </div>
        </div>
    );
};

export default Cover;