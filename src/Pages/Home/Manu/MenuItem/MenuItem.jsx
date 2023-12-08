 
const MenuItem = ({item}) => {
    console.log(item);
    const {name,recipe,image,price} = item;
    return (
        <div className="flex items-center gap-4 space-y-5 hover:bg-slate-300 duration-1000 p-2" style={{borderRadius:'0 200px 200px 200px'}}>
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[110px]" src={image} alt="" />
            <div>
                 <p className="uppercase text-xl font-semibold">{name}</p>
                 <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;