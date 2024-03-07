import PropTypes from 'prop-types'
const TredingCard = ({ key, symbol, thumb, price, priceChange, sparkline }) => {

   // price formetter
   const formattedPrice = price;
   const numericPrice = formattedPrice.replace(/[^0-9.]/g, '');
   const parsedPrice = parseFloat(numericPrice);

   return (
      <>
         <div key={key} className="mx-5px border-solid border-2 border-trendingCardBorder rounded-10px p-17px">
            <div className="flex items-center">
               <div className="h-26px w-26px rounded-full overflow-hidden">
                  <img src={thumb} alt="bnb.png" className="w-full" />
               </div>
               <h5 className="font-inter font-medium text-base text-navLinkColor leading-6 ml-2">{symbol}</h5>
               <span className={`font-inter text-xm ${parseFloat(priceChange) < 0 ? 'text-[#EA3B3B] bg-[#FFE4E4]' : 'text-trendingGreen bg-[#EBF9F4]'} py-0.5 px-1 rounded ml-1`}>
                  {`${parseFloat(priceChange).toFixed(2)}%`}
               </span>

            </div>
            <h3 className="font-inter font-medium text-xl text-[#171717] leading-6 mb-2 mt-3">${parsedPrice.toFixed(2)}</h3>
            <img src={sparkline} alt="graph.png" className="w-full" />
         </div>
      </>
   )
}

TredingCard.propTypes = {
   key: PropTypes.string.isRequired,
   symbol: PropTypes.string.isRequired,
   thumb: PropTypes.string.isRequired,
   price: PropTypes.string.isRequired,
   priceChange: PropTypes.string.isRequired,
   sparkline: PropTypes.string.isRequired,
}

export default TredingCard