import React from 'react';
import ListingCard from '../components/ListingCard';
import SiteHeader from "../components/SiteHeader";
import SearchFilters from "../components/SearchFilters";

export default function Home() {
    return (
        <div className="bg-gray-200 min-h-screen antialiased">
            <SiteHeader/>
            <SearchFilters/>
            <main className="px-4 py-4">
                <h3 className="text-gray-900 text-xl">Los Angeles</h3>
                <p className="text-gray-600">Live like a star ... blah blah blah</p>
                <ListingCard/>
            </main>
        </div>
    );
}































