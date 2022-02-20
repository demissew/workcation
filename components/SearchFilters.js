import React, {useState} from 'react';

function SearchFilters(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleFilters = () => setIsOpen(!isOpen)

    return (

        <section className="bg-gray-800 gap-3 py-3">

            <div className="px-3">
                <div className="flex flex-row justify-between gap-2 items-center">
                    <div className="relative flex-1">
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
                            className="w-full bg-gray-900 text-gray-500 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:bg-white focus:text-gray-900"
                        />
                    </div>
                    <button
                        onClick={() => toggleFilters()}
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
            </div>

            {isOpen && <div className="flex flex-col">

                <div className="border-t border-t-gray-900 mt-4">
                    <fieldset className="px-3 mt-4 sm:flex sm:flex-row sm:gap-4">
                        <div className="flex flex-row gap-4 sm:w-1/2">
                            <label className="block w-1/2">
                                <span className="text-sm text-gray-500 font-semibold">Bedrooms</span>
                                <select
                                    className="form-select block w-full mt-1 border-transparent rounded-lg bg-gray-700 text-gray-400 shadow focus:bg-gray-800 select:focus:border-none">
                                    <option value="4">4</option>
                                </select>
                            </label>
                            <label className="block w-1/2">
                                <span className="text-sm text-gray-500 font-semibold">Bathrooms</span>
                                <select
                                    className="form-select block w-full mt-1 border-transparent rounded-lg bg-gray-700 text-gray-400 shadow focus:bg-gray-800 select:focus:border-none">
                                    <option value="2">2</option>
                                </select>
                            </label>
                        </div>
                        <div className="mt-4 sm:mt-1  sm:w-1/2">
                            <label>
                                <div className="text-sm text-gray-500 font-semibold">Price Range</div>
                                <select
                                    className="form-select block w-full mt-1 border-transparent rounded-lg bg-gray-700 text-gray-400 shadow focus:bg-gray-800 select:focus:border-none">
                                    <option value="2">Up to $2,000/wk</option>
                                </select>
                            </label>
                        </div>
                    </fieldset>
                </div>

                <div className="border-t border-t-gray-900 mt-4">
                    <fieldset className="px-3 mt-2">
                        <legend className="block font-semibold text-gray-500 text-sm">Property Type</legend>
                        <div className="sm:flex sm:flex-row">
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="radio bg-gray-900 focus:bg-gray-800 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="radio" value="house" name="propertyType"/>
                                <span className="text-sm text-gray-500 font-semibold">House</span>
                            </label>
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="radio bg-gray-900 focus:bg-gray-800 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="radio" value="apartment" name="propertyType"/>
                                <span className="text-sm text-gray-500 font-semibold">Apartment</span>
                            </label>
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="radio bg-gray-900 focus:bg-gray-800 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="radio" value="loft" name="propertyType"/>
                                <span className="text-sm text-gray-500 font-semibold">Loft</span>
                            </label>
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="radio bg-gray-900 focus:bg-gray-800 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="radio" value="townhouse" name="propertyType"/>
                                <span className="text-sm text-gray-500 font-semibold">Townhouse</span>
                            </label>
                        </div>
                    </fieldset>
                </div>

                <div className=" border-t border-t-gray-900 mt-4">
                    <fieldset className="px-3 mt-2">
                        <legend className="block font-semibold text-gray-500 text-sm">Amenities</legend>
                        <div className="sm:flex sm:flex-wrap">
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="checkbox rounded bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="house"/>
                                <span className="text-sm text-gray-500 font-semibold">House</span>
                            </label>
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="checkbox rounded bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="airConditioning"/>
                                <span className="text-sm text-gray-500 font-semibold">Air conditioning</span>
                            </label>
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="checkbox rounded bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="pool"/>
                                <span className="text-sm text-gray-500 font-semibold">Pool</span>
                            </label>
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="checkbox rounded bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="beach"/>
                                <span className="text-sm text-gray-500 font-semibold">Beach</span>
                            </label>
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="checkbox rounded bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="petFriendly"/>
                                <span className="text-sm text-gray-500 font-semibold">Pet friendly</span>
                            </label>
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="checkbox rounded bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="kidFriendly"/>
                                <span className="text-sm text-gray-500 font-semibold">Kid friendly</span>
                            </label>
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="checkbox rounded bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="kidFriendly"/>
                                <span className="text-sm text-gray-500 font-semibold">Parking</span>
                            </label>
                        </div>
                    </fieldset>
                </div>

                <div className="bg-gray-900 p-4 mt-4 sm:text-right">
                    <button
                        className="bg-indigo-500 px-4 py-2 rounded-lg text-white block w-full sm:w-auto sm:inline-block font-semibold hover:bg-indigo-400">Update
                        results
                    </button>
                </div>

            </div>
            }
        </section>

    );
}

export default SearchFilters;













































