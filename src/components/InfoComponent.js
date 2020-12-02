import React from 'react';

export const InfoComponent = ( { dates, title, duties, company }) => {
    return (
        <React.Fragment>
            <div className="mt-12 lg:mt-0">
                <h1 className="text-sm sm:text-xl text-gray-600">{title}</h1>
                <h3 className="text-xs sm:text-lg py-1 px-1 sm:px-4 bg-gray-300 rounded w-20 sm:w-32 text-center font-semibold text-gray-600 mt-3">{company}</h3>
                <h5 className="text-gray-500 mt-3 text-xs sm:text-sm">{dates}</h5>
                <div className="mt-6">
                    {
                        duties.map((duty, index) => {
                            return(
                                <div key={index} className="flex mt-4">
                                    <h1 className="font-extrabold text-clr1 mt-4 text-xs sm:text-base">{">>"}</h1>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-500 font-medium ml-8">{duty}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}
