import React from 'react';
import ListingCard from '../components/ListingCard';
import SiteHeader from "../components/SiteHeader";
import SearchFilters from "../components/SearchFilters";
import Filters from "../components/Filters";
import CityProperty from "../components/CityProperty";

export default function Home() {
    return (
        <div className="bg-gray-200 min-h-screen antialiased xl:flex xl:flex-col xl:h-screen">
            <SiteHeader/>
            <div className="xl:flex xl:flex-1 xl:overflow-y-hidden">
                <SearchFilters />
                <main className="pt-3 pb-6 xl:flex-1 xl:overflow-x-hidden">
                    {[1, 2, 3, 4].map(i => <CityProperty key={i}/>)}
                </main>
            </div>
        </div>
    );
}































