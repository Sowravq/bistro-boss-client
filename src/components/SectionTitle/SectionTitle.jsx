 
 const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="max-w-[400px] mx-auto text-center">
            <p className="text-yellow-400">{subHeading}</p>
            <p className="border-b-4 mt-4 mb-4"></p>
            <h2 className="text-4xl font-bold">{heading}</h2>
            <p className="border-b-4 mt-4 mb-4"></p>
        </div>
    );
 };
 
 export default SectionTitle;