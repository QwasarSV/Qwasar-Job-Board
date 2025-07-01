
'use client';

// import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
import JobListing from './components/joblisting';
import NavBar from './components/navbar';
import { useState } from 'react';

// homepage function call for components
export default function HomePage() {
  const [searchInput, setSearchInput] = useState('')
  return (
    <>
      <NavBar />
      <div className='searchBar_wrapper'>
        <SearchBar setSearchInput={setSearchInput} />
      </div>
      <div className='joblisting_wrapper'>
        <JobListing filter={searchInput} />
      </div>
    </>
  );
}

