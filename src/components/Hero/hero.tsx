"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import React from 'react';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Hero = () => {

    const images = [
        "/asset/slider_1.png",
        "/asset/slider_2.png",
        "/asset/slider_1.png",
        "/asset/slider_2.png",
    ];
    return (
        <section className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48 py-16">
            {/* Left Column (Slider) */}
            <div  className="w-full lg:w-1/2">
            <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="rounded-lg shadow-lg"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-96">
                                <Image
                                    src={image}
                                    alt={`Slider Image ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Right Column (Chat Button) */}
            <div className="w-1/2 flex justify-end">
                <button className="bg-red-700 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg">
                তৎক্ষণাৎ আলাপ
                </button>
            </div>
        </section>
    );
};

export default Hero;