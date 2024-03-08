import PropTypes from 'prop-types'
import TredingCard from '../../core/TredingCard/TredingCard'
import useFetch from './../../useFetch';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';

const MoreTreding = ({ heading }) => {
   let sliderRef = useRef(null);

   // fetch api to get data
   const { data, loading, error } = useFetch("https://api.coingecko.com/api/v3/search/trending");
   const dataCoins = data?.coins || [];

   if (loading) {
      return <p>Loading...</p>;
   }

   if (error) {
      return console.error('fetching error', error);
   }

   // Handle the case where data is null
   if (!dataCoins) {
      return <p>No data available.</p>;
   }

   // slider settings
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         }
      ]
   };

   const next = () => {
      sliderRef.slickNext();
   };
   const previous = () => {
      sliderRef.slickPrev();
   };

   return (
      <>
         <div className="mb-30px ">
            <h3 className="font-inter font-semibold text-xl md:text-2xl text-navLinkColor leading-7 mb-5">{heading}</h3>

            <div className="relative">
               <Slider ref={slider => {
                  sliderRef = slider;
               }} {...settings}>
                  {
                     dataCoins?.map(({ item }) => (
                        <TredingCard
                           key={item.coin_id}
                           symbol={item.symbol}
                           thumb={item.thumb}
                           price={item.data.price}
                           priceChange={item.data.price_change_percentage_24h.usd}
                           sparkline={item.data.sparkline}
                        />
                     )

                     )
                  }
               </Slider >

               <div onClick={previous} className="!hidden h-7 w-7 bg-white rounded-full drop-shadow-sliderBtnShadow md:!flex items-center justify-center absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 cursor-pointer">
                  <IoIosArrowBack className='text-lg' />
               </div>
               <div onClick={next} className="!hidden h-7 w-7 bg-white rounded-full drop-shadow-sliderBtnShadow md:!flex items-center justify-center absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 cursor-pointer">
                  <IoIosArrowForward className='text-lg' />
               </div>

            </div>

         </div>
      </>
   )
}

MoreTreding.propTypes = {
   heading: PropTypes.string.isRequired
}

export default MoreTreding