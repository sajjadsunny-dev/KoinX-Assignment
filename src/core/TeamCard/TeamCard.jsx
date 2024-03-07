import PropTypes from 'prop-types'

const TeamCard = ({ key, name, Designation, Profile_img, details }) => {
   // console.log(name)
   return (
      <>
         <div key={key} className="w-full flex flex-col md:flex-row items-center bg-teamCardBg p-3 rounded-lg mt-6">
            <div className="w-32 flex flex-col items-center mb-4 md:mb-0">
               <div className="w-24 h-[104px] rounded-lg overflow-hidden">
                  <img src={Profile_img} alt={Profile_img} className="w-full h-full object-cover" />
               </div>
               <h2 className="font-inter font-semibold text-15px text-navLinkColor mt-3.5 mb-1">{name}</h2>
               <h5 className="font-inter font-medium text-xs text-[#788F9B]">{Designation}</h5>
            </div>
            <p className="font-inter text-sm leading-[160%] text-navLinkColor md:ml-8 w-full">{details}</p>
         </div>
      </>
   )
}

TeamCard.propTypes = {
   key: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   Designation: PropTypes.string.isRequired,
   Profile_img: PropTypes.string.isRequired,
   details: PropTypes.string.isRequired,
}

export default TeamCard