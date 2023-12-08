 
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className="mt-16 mb-16 max-w-5xl mx-auto">
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            >

            </SectionTitle>

            <div className="mt-16">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews?.map(review => <SwiperSlide key={review._id}>

                            <div className="max-w-4xl mx-auto">
                                <div className="flex justify-center items-center mb-14">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                </div>

                                <p>{review.details}</p>
                                <p className="text-center text-2xl font-semibold text-yellow-600">{review.name}</p>
                            </div>

                        </SwiperSlide>)
                    }

                </Swiper>
            </div>




        </div>
    );
};

export default Reviews;