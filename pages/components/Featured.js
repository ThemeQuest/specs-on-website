import Image from 'next/image'
import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

function Featured() {
    const [isOpen, setOpen] = useState(false)
    return (
        <section className="featured flex flex-col items-center text-center justify-center">
            <div className="mb-8 xl:px-40 lg:px-20 md:px-10 sm:px-5 px-3">
                <div className="mb-8">
                    {(typeof window !== 'undefined') &&
                        <ModalVideo 
                            channel='youtube' 
                            autoplay 
                            isOpen={isOpen} 
                            videoId="bNpx7gpSqbY" 
                            onClose={() => setOpen(false)} 
                        />
                    }
                    <div 
                    className="cursor-pointer relative"
                    onClick={()=> setOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-16 w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <Image
                            src='/assets/laptop-screen-dark-1.jpg'
                            alt="featured"
                            // layout="fill"
                            width={800}
                            height={450}
                            objectFit="contain"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <h2 className="font-bold text-gray-400 mr-4">Powered by</h2>
                    <Image
                    src='/assets/cloudinary_logo_for_white_bg.svg'
                    alt="featured"
                    width={160}
                    height={31}
                    />
                </div>
            </div>
        </section>
    )
}

export default Featured