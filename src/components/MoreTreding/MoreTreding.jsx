import PropTypes from 'prop-types'
import TredingCard from '../../core/TredingCard/TredingCard'
const MoreTreding = ({ heading }) => {
   return (
      <>
         <div className="mb-30px">
            <h3 className="font-inter font-semibold text-2xl text-navLinkColor leading-7 mb-5">{heading}</h3>

            <div className="grid grid-cols-10">
               <TredingCard />
               <TredingCard />
               <TredingCard />
               <TredingCard />
               <TredingCard />
            </div>
         </div>
      </>
   )
}

MoreTreding.propTypes = {
   heading: PropTypes.string.isRequired
}

export default MoreTreding