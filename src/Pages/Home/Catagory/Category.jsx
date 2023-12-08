import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
 
 
 const Category = () => {
    return (
       <section className='mt-16'>
        <SectionTitle
         subHeading={'---From 11:00am to 10:00pm---'}
         heading={'ORDER ONLINE'}
        >
           
        </SectionTitle>
          <Swiper
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mt-20 mb-20 max-w-5xl mx-auto"
      >
        <SwiperSlide> 
            <img className='w-full ' src={slide1} alt="" />
            <p className='text-4xl uppercase text-center text-white  p-5 -mt-24'>salads</p>
        </SwiperSlide>
        <SwiperSlide> 
            <img className='w-full ' src={slide2} alt="" />
            <p className='text-4xl uppercase text-center text-white  p-5 -mt-24'>Soups</p>
        </SwiperSlide>
        <SwiperSlide> 
            <img className='w-full ' src={slide3} alt="" />
            <p className='text-4xl uppercase text-center text-white  p-5 -mt-24'>pizzas</p>
        </SwiperSlide>
        <SwiperSlide> 
            <img className='w-full ' src={slide4} alt="" />
            <p className='text-4xl uppercase text-center text-white  p-5 -mt-24'>desserts</p>
        </SwiperSlide>
        <SwiperSlide> 
            <img className='w-full ' src={slide5} alt="" />
            <p className='text-4xl uppercase text-center text-white  p-5 -mt-24'>salads</p>
        </SwiperSlide>
        

 
        
      </Swiper>
       </section>
    );
 };
 
 export default Category;