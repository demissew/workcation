import React from 'react';

function Filters(props) {
    return (
        <div className="flex flex-col xl:h-full xl:justify-between">
            <div
                className="xl:block xl:overflow-y-auto lg:flex lg:flex-row lg:border-t lg:border-t-gray-900 xl:border-0 lg:mt-2 xl:flex-col">

                <div
                    className="border-t border-t-gray-900 mt-4 lg:mt-0 lg:mp-4 lg:px-2 lg:border-t-0 lg:w-1/3 xl:w-full">
                    <fieldset className="px-3 mt-4 sm:flex sm:flex-row lg:flex-col sm:gap-4">
                        <div className="flex flex-row gap-4 sm:w-1/2 lg:w-full">
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
                        <div className="mt-4 sm:mt-1  sm:w-1/2 lg:w-full lg:mt-4">
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

                <div className="border-t border-t-gray-900 mt-4 lg:mt-0 lg:mp-4 lg:px-2
                                    lg:border-t-0 lg:border-l lg:border-l-gray-900 lg:w-1/5
                                    xl:mt-4 xl:pt-2 xl:border-l-0 xl:border-t xl:border-t xl:border-t-gray-900 xl:w-full
                                    ">
                    <fieldset className="px-3 mt-2">
                        <legend className="block font-semibold text-gray-500 text-sm">Property Type</legend>
                        <div className="sm:flex sm:flex-row lg:flex-col">
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="form-radio w-5 h-5 bg-gray-900 focus:bg-gray-700 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="radio" value="house" name="propertyType"/>
                                <span className="text-sm text-gray-500 font-semibold">House</span>
                            </label>
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="form-radio w-5 h-5 bg-gray-900 focus:bg-gray-700 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="radio" value="apartment" name="propertyType"/>
                                <span className="text-sm text-gray-500 font-semibold">Apartment</span>
                            </label>
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="form-radio w-5 h-5 bg-gray-900 focus:bg-gray-700 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="radio" value="loft" name="propertyType"/>
                                <span className="text-sm text-gray-500 font-semibold">Loft</span>
                            </label>
                            <label className="block sm:w-1/4 flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="form-radio w-5 h-5 bg-gray-900 focus:bg-gray-700 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="radio" value="townhouse" name="propertyType"/>
                                <span className="text-sm text-gray-500 font-semibold">Townhouse</span>
                            </label>
                        </div>
                    </fieldset>
                </div>

                <div className="border-t border-t-gray-900 mt-4 lg:mt-0 lg:mp-4 lg:px-2
                                    lg:border-t-0 lg:border-l lg:border-l-gray-900
                                    xl:mt-4 xl:pt-2 xl:border-l-0 xl:border-t xl:border-t xl:border-t-gray-900 xl:w-full
                                    ">
                    <fieldset className="px-3 mt-2">
                        <legend className="block font-semibold text-gray-500 text-sm">Amenities</legend>
                        <div className="sm:flex sm:flex-wrap xl:flex-col">
                            <label className="block sm:w-1/4 xl:w-full flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="form-checkbox w-5 h-5 rounded-md bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="house"/>
                                <span className="text-sm text-gray-500 font-semibold">House</span>
                            </label>
                            <label className="block sm:w-1/4 xl:w-full flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="form-checkbox w-5 h-5 rounded-md bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="pool"/>
                                <span className="text-sm text-gray-500 font-semibold">Pool</span>
                            </label>
                            <label className="block sm:w-1/4 xl:w-full flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="form-checkbox w-5 h-5 rounded-md bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="beach"/>
                                <span className="text-sm text-gray-500 font-semibold">Beach</span>
                            </label>
                            <label className="block sm:w-1/4 xl:w-full flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="form-checkbox w-5 h-5 rounded-md bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="petFriendly"/>
                                <span className="text-sm text-gray-500 font-semibold">Pet friendly</span>
                            </label>
                            <label className="block sm:w-1/4 xl:w-full flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="form-checkbox w-5 h-5 rounded-md bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="kidFriendly"/>
                                <span className="text-sm text-gray-500 font-semibold">Kid friendly</span>
                            </label>
                            <label className="block sm:w-1/4 xl:w-full flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="form-checkbox w-5 h-5 rounded-md bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="kidFriendly"/>
                                <span className="text-sm text-gray-500 font-semibold">Parking</span>
                            </label>
                            <label className="block sm:w-1/3 xl:w-full flex flex-row mt-4 gap-2 items-center">
                                <input
                                    className="form-checkbox w-5 h-5 rounded-md bg-gray-900 border-transparent checked:focus:outline-none checked:focus:bg-indigo-500 checked:focus:border-transparent focus:bg-indigo-500 checked:bg-indigo-500"
                                    type="checkbox" name="airConditioning"/>
                                <span className="text-sm text-gray-500 font-semibold">Air conditioning</span>
                            </label>
                        </div>
                    </fieldset>
                </div>

            </div>
            <div className="bg-gray-900 p-4 mt-4 sm:text-right">
                <button
                    className="bg-indigo-500 px-4 py-2 rounded-lg text-white block w-full sm:w-auto sm:inline-block xl:w-full xl:block font-semibold hover:bg-indigo-400">
                    Update results
                </button>
            </div>
        </div>
    );
}

export default Filters;