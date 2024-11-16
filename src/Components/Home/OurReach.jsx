import React from 'react'

const OurReach = ({title,array}) => {
  return (
    <div className='w-full text-center my-12'>
        <div className='h-full border-none w-full my-4 bg-amber-500'><p className='w-1/2 min-w-fit px-2 md:text-4xl  text-xl py-2 md:py-4 font-bold border-white border-2 h-full mx-auto bg-white md:px-8 text-nowrap'>Our {title} <span className="text-amber-500">Reach</span> </p></div>        
        <div className="gap-5 grid grid-cols-2 md:grid-cols-4 py-4 w-11/12 mx-auto">
            {
                array.map((item)=>(
                    <div className="w-1/2 mx-auto h-auto">
                        <img src={item} alt="" className='w-full h-full object-contain' />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurReach