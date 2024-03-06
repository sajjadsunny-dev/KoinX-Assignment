import PropTypes from 'prop-types'
import TredingCard from '../../core/TredingCard/TredingCard'
import useFetch from './../../useFetch';

const MoreTreding = ({ heading }) => {
   // fetch api to get data
   const { data, loading, error } = useFetch("https://api.coingecko.com/api/v3/search/trending");
   const dataCoins = data?.coins || [];

   if (loading) {
      return <p>Loading...</p>;
   }

   if (error) {
      return <p>Error: {error.message}</p>;
   }

   // Handle the case where data is null
   if (!dataCoins) {
      return <p>No data available.</p>;
   }

   return (
      <>
         <div className="mb-30px">
            <h3 className="font-inter font-semibold text-2xl text-navLinkColor leading-7 mb-5">{heading}</h3>

            <div className="grid grid-cols-10">

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
            </div>
         </div>
      </>
   )
}

MoreTreding.propTypes = {
   heading: PropTypes.string.isRequired
}

export default MoreTreding