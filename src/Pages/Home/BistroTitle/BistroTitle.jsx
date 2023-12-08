import service from '../../../assets/home/chef-service.jpg'

const BistroTitle = () => {
    return (
        <div className="hero max-w-5xl mx-auto h-[500px] bg-fixed mb-20" style={{backgroundImage:`url(${service})`}}>
           <div className='p-36 hero-overlay bg-slate-600 bg-opacity-60'>
          <div className='text-center text-black bg-white max-w-3xl mx-auto p-10 '>
          <p className='text-2xl font-semibold uppercase mb-4'> Bistro Boss</p> 
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
          </div>
           </div>
        </div>
    );
};

export default BistroTitle;