import React from 'react';

function SearchFilters(props) {
    return (

        <section className="bg-gray-800 py-3">
            <div className="flex justify-between px-2 items-center">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                            className="w-6 h-6 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        placeholder="Search by keywords"
                        className="bg-gray-900 text-gray-500 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:bg-white focus:text-gray-900"
                    />
                </div>
                <button
                    className="inline-flex bg-gray-700 hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4 py-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="h-6 w-6 text-gray-500"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <span className="ml-1 text-white font-medium">Filters</span>
                </button>
            </div>
            <div className="flex flex-col border-t border-t-gray-900">
                <div className="flex flex-row gap-2 p-3">
                    <label>
                        <span className="text-sm text-gray-600">Bedrooms</span>
                        <select name="" id="">
                            <option value="4">4</option>
                        </select>
                    </label>
                    <label>
                        <span className="text-sm text-gray-600">Bathrooms</span>
                        <select name="" id="">
                            <option value="2">2</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <div className="text-sm text-gray-600">Price Range</div>
                        <select name="" id="">
                            <option value="2">Up to $2,000/wk</option>
                        </select>
                    </label>
                </div>

            </div>
        </section>

    );
}

export default SearchFilters;













































