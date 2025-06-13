
'use client';

// import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
import JobListing from './components/joblisting';
import { useState } from 'react';

// homepage function call for components
export default function HomePage(){
  const [searchInput, setSearchInput] = useState('')
  return (
    <>
    <div className='joblisting_wrapper'>
      <JobListing filter={searchInput}/>
    </div>
    <div className='searchBar_wrapper'>
      <SearchBar setSearchInput={setSearchInput}/>
    </div>
    </>
  );
}
/*
USE WHEN HAVE NAVBAR AND SEARCHBAR 
<div className='navbar_wrapper'>
      <NavBar />
    </div>
    <div className='searchbar_wrapper'>
      <SearchBar/>
    </div>
*/
