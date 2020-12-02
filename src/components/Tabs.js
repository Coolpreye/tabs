import React from 'react';

export const Tabs = ({ companies, value, setValue }) => {
    console.log(companies)
    return (
        <React.Fragment>
            <div className="flex justify-evenly w-full max-w-xs mx-auto lg:flex-col">
                {
                    companies.map(( company, index ) => {
                        return (
                            <button type="button" key={company.id} onClick={() => setValue(index)} className={`tab ${index === value && 'tab-active'}`}>
                                {company.company}
                            </button>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}
