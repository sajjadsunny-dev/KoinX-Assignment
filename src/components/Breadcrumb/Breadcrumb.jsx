import { NavLink, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
   const { pathname } = useLocation();
   const pathNames = pathname.split('/').filter((x) => x);

   let breadcrumbPath = '';


   return (
      <>
         <div className="w-full py-17px col-span-12">
            <div className="max-w-container mx-auto px-2.5">
               <div className="flex items-center">
                  <NavLink to={'/'} className="font-inter text-sm text-[#3E5765]">Cryptocurrencies</NavLink>
                  {
                     pathNames?.map((name, i) => {
                        breadcrumbPath += `/${name}`;
                        const isLast = i === pathNames.length - 1;

                        return isLast ?
                           <span className='capitalize font-inter text-base text-[#0F1629] font-medium flex items-center' key={i}><img src="/arrow.svg" alt="" className="mt-0.5 h-3.5 mx-2.5" /> {name}</span>
                           :
                           (
                              <span className='capitalize ont-inter text-sm text-[#3E5765] flex items-center' key={i}><img src="/arrow.svg" alt="" className="mt-0.5 h-3.5 mx-2.5" /> <NavLink to={breadcrumbPath}>{name}</NavLink></span>
                           )
                     })
                  }
               </div>
            </div>
         </div>
      </>
   )
}

export default Breadcrumb