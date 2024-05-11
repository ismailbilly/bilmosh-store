import React from 'react'
import Slider from 'react-slick';

const Banner = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  return (
    <div className='mt-[500px]'>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
    // <div className="relative bg-gray-500 flex justify-center overflow-hidden">
    //   <div className="absolute -top-1/2 right-0 w-[200px] h-[200px] bg-red-500 rounded-3xl rotate-45 -z-9"></div>
    // </div>
  );
}

export default Banner