import TeamCard from "../../core/TeamCard/TeamCard"

const Team = () => {
   const teamMemberInfo = [
      {
         id: '01',
         name: 'john smith',
         Designation: 'Designation here',
         Profile_img: '/team/johnSmith.png',
         details: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu'
      },
      {
         id: '02',
         name: 'Elina Williams',
         Designation: 'Designation here',
         Profile_img: '/team/elinaWilliams.png',
         details: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu'
      },
      {
         id: '03',
         name: 'john smith',
         Designation: 'Designation here',
         Profile_img: '/team/johnSmith2.png',
         details: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu'
      }
   ]

   return (
      <>
         <div className="w-11/12 px-6 pt-6 pb-42px bg-white rounded-lg mt-5">
            <h2 className="font-inter font-semibold text-2xl text-navLinkColor mb-6">Tokenomics</h2>
            <p className="font-inter font-medium text-base text-teamP leading-[160%]">Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
            {
               teamMemberInfo?.map((item) => (

                  < TeamCard
                     key={item.id}
                     name={item.name}
                     Designation={item.Designation}
                     Profile_img={item.Profile_img}
                     details={item.details}
                  />

               ))
            }
         </div>
      </>
   )
}

export default Team