import React from 'react'

const Footer = () => {
    return (
        <>
            {/* Desktop Responsiveness */}
            <div className='w-full md:flex flex-row bg-black pt-20 pb-14 hidden border-b-2 border-gray-900'>
                <div className='md:w-1/4'>
                    <img src="assests/companyLogo/logo.png" className="md:ml-32 w-24 -mt-4 h-auto" alt="point" />
                </div>

                <div className='md:w-1/4'>
                    <div className='flex flex-col w-full'>
                        <p className='font-space-grotesk text-sm font-bold  text-gray-600'>Melbourne</p>
                        <p className='font-muli text-base font-bold mt-6 text-white mr-40'>Level 1, Unit 9 / 677 Springvale Road, Mulgrave VIC 3170</p>

                        <p className='font-space-grotesk text-sm font-bold mt-10 text-gray-600'>Colombo</p>
                        <p className='font-muli text-base font-bold mt-6 text-white mr-40'>Level 4, 46/38, Navam Mawatha, Colombo 02, 00200</p>
                    </div>
                </div>
                <div className='md:w-1/4'>
                    <p className='font-space-grotesk text-base font-bold text-gray-600'>Work inquiries</p>
                    <p className='font-muli text-base font-bold mt-6 text-white mr-20'>Interested in working with us? hello@empite.com</p>
                </div>

                <div className='md:w-1/4'>
                    <p className='font-space-grotesk text-base font-bold text-gray-600'>Stay in touch</p>
                    <div className='flex flex-row justify-between bg-gray-900 p-4 mr-20 mt-4'>
                        <p className='font-muli text-xs text-gray-700'>Your email address</p>
                        <p className='font-muli text-xs text-white'>Subscribe</p>
                    </div>
                </div>
            </div>
            <div className='w-full font-muli text-sm text-gray-400 md:pl-32 pt-4 pb-10 md:flex hidden bg-black'>© 2020, Empite Pty Ltd</div>




            {/* Mobile Responsiveness */}
            <div className='w-full md:hidden flex-col bg-black pt-20 pb-14 flex border-b-2 border-gray-900'>

                <div className='flex flex-row'>
                    <div className='w-1/2'>
                        <img src="assests/companyLogo/logo.png" className="w-auto h-auto mx-auto" alt="point" />
                    </div>
                    <div className='w-1/2'>
                        <div className='flex flex-col w-full text-center'>
                            <p className='font-space-grotesk text-sm font-bold  text-gray-600 mr-10 text-center'>Melbourne</p>
                            <p className='font-muli text-base font-bold mt-6 text-white mr-10 text-center mx-auto'>Level 1, Unit 9 / 677 Springvale Road, Mulgrave VIC 3170</p>

                            <p className='font-space-grotesk text-sm font-bold mt-10 mr-10 text-gray-600'>Colombo</p>
                            <p className='font-muli text-base font-bold mt-6 text-white mr-10'>Level 4, 46/38, Navam Mawatha, Colombo 02, 00200</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row mt-10'>
                    <div className='w-1/2'>
                        <p className='font-space-grotesk text-base font-bold text-gray-600 text-center'>Work inquiries</p>
                        <p className='font-muli text-base font-bold mt-6 text-white mr-0 text-center'>Interested in working with us? hello@empite.com</p>
                    </div>
                    <div className='w-1/2'>
                        <p className='font-space-grotesk text-base font-bold text-gray-600 text-center mr-10'>Stay in touch</p>
                        <div className='flex flex-row justify-between bg-gray-900 p-2 ml-2 mr-2 mt-4'>
                            <p className='font-muli text-xs text-gray-700'>Your email address</p>
                            <p className='font-muli text-xs text-white'>Subscribe</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full font-muli text-xs text-gray-400 md:pl-32 pb-10 md:hidden flex text-center pl-2 bg-black pt-4'>© 2020, Empite Pty Ltd</div>
        </>
    )
}

export default Footer