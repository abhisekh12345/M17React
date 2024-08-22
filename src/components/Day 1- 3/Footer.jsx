import React from 'react'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
   <>
     <footer className='absolute bottom-0 text-center  w-full pb-3'>
         <div>
            <h1 className='text-gray-500'>Copyright @ {currentYear}</h1>
         </div>
     </footer>
   </>
  )
}

export default Footer