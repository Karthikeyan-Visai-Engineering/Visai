import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your local images
import image1 from '../assets/photo1.jpg';
import image2 from '../assets/photo2.jpg';
import image3 from '../assets/photo3.jpg';
import image4 from '../assets/photo4.jpg';

const images = [
  { id: 1, src: image1, alt: 'Industrial Machinery', sliderTitle: "Industrial Machinery" },
  { id: 2, src: image2, alt: 'Construction Site', sliderTitle: "Construction Site" },
  { id: 3, src: image3, alt: 'Pipeline Infrastructure', sliderTitle: "Pipeline Infrastructure" },
  { id: 4, src: image4, alt: 'Engineering Project', sliderTitle: "Engineering Project" },
];

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-6 px-4 pt-24">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
            />
            {/* Title Overlay */}
            {/* <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 text-white text-xl md:text-2xl font-semibold px-6 py-3 rounded-md shadow-lg">
              {image.sliderTitle}
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
