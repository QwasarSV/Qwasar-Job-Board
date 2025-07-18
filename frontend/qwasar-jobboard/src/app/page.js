
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
      <div className='joblisting_wrapper'>
        <JobListing filter={searchInput} />
      </div>
      <div className="flex flex-col min-h-screen">
        {/* Placeholder for future search bar*/}
        <div className="h-[35vh] flex items-center justify-center">
          {/* Search bar will go here later */}
          {/* <div className='searchBar_wrapper'>
            <SearchBar setSearchInput={setSearchInput} />
          </div> */}
          <div className="text-muted-foreground">Search bar placeholder</div>
        </div>
        
        {/* Job card */}
        <main className="flex-1 py-8">
          <div className="w-[90%] max-w-auto mx-auto space-y-8">
            {/* {jobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))} */}
            <JobCard 
              job={{ 
                title: "Job Title", 
                company: "Company Name", 
                location: "Fountain Valley, CA", 
                experienceLevel: "Senior Level",
                salary: "$130,000 - $170,000",
                description: "Software job blahblahblah aosikdjsaldkLOAUApodjsalkfdhsa;flksjfla;sfjsoijefisadkfnkjzdghzsufhid sfjsoijefisadkfnkjzdghzsufhid sfjsoijefisadkfnkjzdghzsufhid sfjsoijefisadkfnkjzdghzsufhid",
                requirements: ["React", "TypeScript","JavaSCript","Java","C","Agile methodology","Scrum","Software development cycle","bachelor's degree in computer science or related OR 1-3 years of relevant work experience with no degree"],
                posted_date: "1/1/2024",
                url: "https://example.com/apply"
              }} 
              // job={{company_id: "8127c509-6bc7-46cd-a95c-06cac602f4fd",
              // description: "\u003Cdiv class=\"article__content__view\"\u003E\n\u003Cdiv class=\"article__content__view__field\"\u003E\n\u003Cdiv class=\"article__content__view__field__label\"\u003E\n                                                Introduction\n                                            \u003C/div\u003E\n\u003Cdiv class=\"article__content__view__field__value\"\u003E\n\u003Cp\u003EIBM Research takes responsibility for technology and its role in society. Working in IBM Research means you'll join a team who invent what's next in computing, always choosing the big, urgent and mind-bending work that endures and shapes generations. Our passion for discovery, and excitement for defining the future of tech, is what builds our strong culture around solving problems for clients and seeing the real-world impact that you can make.\u003C/p\u003E\n\u003C/div\u003E\n\u003C/div\u003E\n\u003Cdiv class=\"article__content__view__field\"\u003E\n\u003Cdiv class=\"article__content__view__field__label\"\u003E\n                                                Your role and responsibilities\n                                            \u003C/div\u003E\n\u003Cdiv class=\"article__content__view__field__value\"\u003E\n\u003Cp\u003EIBM Quantum is seeking candidates for an entry level Hardware Engineer position at the T.J. Watson Research Center in Yorktown Heights, NY. The role will focus on advancing IBM Quantum systems through the fabrication, characterization, and overall development of the chips used to build quantum computers. The ideal candidate would have strong problem-solving skills, the ability to work well in an interdisciplinary team, and a growth mindset. On a day to day basis, the role entails performing tasks (for example, optical microscopy, scanning electron microscopy, electrical characterization, data analysis, etc.) to support the more experienced engineers on the team execute experiments. No previous experience in quantum device fabrication is required.\u003C/p\u003E\n\u003C/div\u003E\n\u003C/div\u003E\n\u003Cdiv class=\"article__content__view__field\"\u003E\n\u003Cdiv class=\"article__content__view__field__label\"\u003E\n                                                Required education\n                                            \u003C/div\u003E\n\u003Cdiv class=\"article__content__view__field__value\"\u003E\n                                                                                            Bachelor's Degree\n                                                                                    \u003C/div\u003E\n\u003C/div\u003E\n\u003Cdiv class=\"article__content__view__field\"\u003E\n\u003Cdiv class=\"article__content__view__field__label\"\u003E\n                                                Required technical and professional expertise\n                                            \u003C/div\u003E\n\u003Cdiv class=\"article__content__view__field__value\"\u003E\n\u003Cul\u003E\u003Cli\u003EAbility to independently troubleshoot and solve complex problems.\u003C/li\u003E\u003Cli\u003EAbility to communicate and work with an interdisciplinary team of electrical engineers, fabrication engineers, and experimental physicists.\u003C/li\u003E\u003Cli\u003EStrong growth mindset\u003C/li\u003E\u003Cli\u003EBachelor's degree in a relevant field (materials science, electrical engineering, chemistry, physics, applied physics, etc.)\u003C/li\u003E\u003C/ul\u003E\n\u003C/div\u003E\n\u003C/div\u003E\n\u003Cdiv class=\"article__content__view__field\"\u003E\n\u003Cdiv class=\"article__content__view__field__label\"\u003E\n                                                Preferred technical and professional experience\n                                            \u003C/div\u003E\n\u003Cdiv class=\"article__content__view__field__value\"\u003E\n\u003Cul\u003E\u003Cli\u003EExperience with materials characterization techniques (for example, optical microscopy, scanning electron microscopy, atomic force microscopy, x-ray diffraction, etc.) \u003C/li\u003E\u003C/ul\u003E\n\u003C/div\u003E\n\u003C/div\u003E\n\u003C/div\u003E",
              //   id: "0444ba87-b479-4cd9-a7a2-6d678abbc304",
              //   internal_id: "35420",
              //   job_category_id: 2,
              //   location: "Yorktown Heights, New York",
              //   posted_date: "28-May-2025",
              //   salary: "$193,500.00",
              //   source: "Direct",
              //   status: "Open",
              //   title: "Quantum Hardware Engineer",
              //   url: "https://ibmglobal.avature.net/en_US/careers/JobDetail?jobId=35420&source=WEB_Search_NA"}}
            />
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-4">
            <button className="px-4 py-2 page-button rounded-md text-sm">
              Previous
            </button>
            <button className="px-4 py-2 page-button rounded-md text-sm">
              1
            </button>
            <button className="px-4 py-2 page-button rounded-md text-sm">
              Next
            </button>
          </div>
        </main>
        {/* <div className='flex-1 flex flex-col items-center p-4'>
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
        </div> */}
      </div>
      
    </>
  );
}

