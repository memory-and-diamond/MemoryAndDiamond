import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Memories extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 3000,
            cssEase: "linear",
            centerMode: true,
            pauseOnHover: false,
            centerPadding: "120px",
            responsive: [
                {
                    breakpoint: 1090,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 830,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        speed: 800
                    }
                }
            ]
        };

        const images = [
            '/public/Images/m1.jpg',
            '/public/Images/m2.jpg',
            '/public/Images/m3.jpg',
            '/public/Images/m4.jpg',
            '/public/Images/m5.jpg'
        ]

        return (
            <div className="mt-8 overflow-hidden px-16 bg-gradient-to-r from-pink-300 via-pink-400 to-red-400">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div className="p-8" key={index} >
                            <img className="rounded-lg" src={image} alt='memories wedding' />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
