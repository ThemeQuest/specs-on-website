import React from 'react'
import Typewriter from "typewriter-effect";

function Banner() {
    return (
        <section className="banner flex flex-col items-center text-center justify-center pt-28 lg:py-28 lg:mb-0 mb-24">
          <div className="max-w-xl md:max-w-5xl text-lg">
            <h1 className="banner__heading mb-8 text-5xl md:text-6xl">
              <span className="flex flex-col lg:flex-row text-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Use AI to&nbsp;
               <strong>
                <Typewriter
                    options={{
                      strings: ['try out new specs', 'save on delivery costs'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
               </strong>
              </span>
            </h1>
            <p className="banner__text text-gray-600 text-xl px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus deserunt voluptatum perspiciatis necessitatibus 
                eius non recusandae quibusdam iste eos sed assumenda repellat.
            </p>
            <button type="button" className="mt-8 text-white font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-3 md:mr-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Get started</button>
          </div>
      </section>
    )
}

export default Banner
