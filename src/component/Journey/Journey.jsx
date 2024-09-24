import React from 'react'

const Journey = () => {
    return (
        <div className="relative flex items-center justify-center h-[358px] bg-cover bg-center bg-[url('/images/Journey-bg.png')]">
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 text-center">
                <p className="text-sm font-semibold text-white">Join the Success Journey</p>
                <h4 className="text-4xl font-bold mb-4 text-white">Become a Dealer</h4>
                <p className="text-lg mb-6 text-white">Lorem ipsum dolor sit amet consectetur. Integer dui quam nisi in ornare. Nec in tristique et ultrices sit ullamcorper massa tempor et.</p>
                <a href="#read-more" className="inline-block px-6 py-3 bg-white text-black border-2 border-black rounded-full">
                    Read More
                </a>
            </div>
        </div>
    )
}

export default Journey
