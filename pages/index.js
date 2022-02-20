import React from 'react';
import ListingCard from '../components/ListingCard';
import SiteHeader from "../components/SiteHeader";
import SearchFilters from "../components/SearchFilters";

export default function Home() {
    return (
        <div className="bg-gray-200 min-h-screen antialiased">
            <SiteHeader/>
            <SearchFilters/>
            <main className="py-4">

                <div className="px-4 flex justify-between items-end">
                    <div>
                        <h3 className="text-gray-900 text-xl">Los Angeles</h3>
                        <p className="text-gray-600">Live like a star ... blah blah blah</p>
                    </div>
                    <div className="hidden sm:block">
                        <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-400">View all</a>
                    </div>
                </div>

                <div className="sm:flex sm:gap-6 sm:overflow-x-auto sm:pb-8 px-4">
                    {[1, 2, 3, 4, 5].map(i => <ListingCard key={i}/>)}
                </div>

            </main>
        </div>
    );
}































