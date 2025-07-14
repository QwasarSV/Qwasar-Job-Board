
'use client';

// import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
import JobListing from './components/joblisting';
import NavBar from './components/navbar';
import JobCard from './components/jobcard';
import { useState } from 'react';

// homepage function call for components
export default function HomePage() {
  const [searchInput, setSearchInput] = useState('')
  return (
    <>
      <NavBar />
      {/* <div className='searchBar_wrapper'>
        <SearchBar setSearchInput={setSearchInput} />
      </div> */}
      <div className='joblisting_wrapper'>
        <JobListing filter={searchInput} />
      </div>
      <div className="flex flex-col min-h-screen">
        {/* Placeholder for future search bar*/}
        <div className="h-[35vh] flex items-center justify-center">
          {/* Search bar will go here later */}
          <div className="text-muted-foreground">Search bar placeholder</div>
        </div>
        
        {/* Job card positioned right below */}
        <div className='flex-1 flex flex-col items-center p-4'>
          <JobCard 
            job={{ 
              title: "Job Title", 
              company: "Company Name", 
              location: "Fountain Valley, CA", 
              salary: "$130,000 - $170,000",
              description: "Software job blahblahblah aosikdjsaldkLOAUApodjsalkfdhsa;flksjfla;sfjsoijefisadkfnkjzdghzsufhid sfjsoijefisadkfnkjzdghzsufhid sfjsoijefisadkfnkjzdghzsufhid sfjsoijefisadkfnkjzdghzsufhid",
              requirements: ["React", "TypeScript","JavaSCript","Java","C","Agile methodology","Scrum","Software development cycle","bachelor's degree in computer science or related OR 1-3 years of relevant work experience with no degree"],
              postedDate: "1/1/2024",
              link: "https://example.com/apply"
            }} 
          />
        </div>
      </div>
      
    </>
  );
}

