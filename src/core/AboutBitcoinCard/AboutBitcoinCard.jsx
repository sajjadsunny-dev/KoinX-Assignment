import { FaArrowRight } from "react-icons/fa6";
import PropTypes from 'prop-types'

const AboutBitcoinCard = ({ image, bgStyle, heading }) => {

   return (
      <>
         <div style={{ background: `${bgStyle}` }} className="col-span-2 md:col-span-1 rounded-7px py-3 pl-3 pr-6 flex items-center">

            <div className="w-32 h-32 rounded-lg overflow-hidden">
               <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt="holdingBitcoinBanner.png"
               />
            </div>

            <div className="ml-5">
               <h2 className="font-inter font-bold text-xl text-white leading-[140%] mb-4">{heading}</h2>
               <button
                  className="font-inter font-semibold text-sm leading-7 py-0.5 px-3.5 bg-white rounded-lg flex items-center"
                  type="button"
               >Check Now <FaArrowRight className="ml-1.5 text-lg" /></button>
            </div>

         </div>
      </>
   )
}

AboutBitcoinCard.propTypes = {
   image: PropTypes.string.isRequired,
   bgStyle: PropTypes.string.isRequired,
   heading: PropTypes.string.isRequired
}

export default AboutBitcoinCard