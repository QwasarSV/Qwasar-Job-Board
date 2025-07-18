'use client';

import React, { useState } from 'react';

const JobCard = ({ job }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isRequirementsOpen, setIsRequirementsOpen] = useState(false);

  const truncateText = (text, maxLength = 150) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const formatSalary = (salaryString) => {
    // Remove commas and normalize separators
    const cleaned = salaryString
      .replace(/,/g, '')
      .replace(/\s*-\s*/g, ' - ')
      .replace(/\s*\+\s*/g, '+')
    
    // Extract all numbers
    const numbers = cleaned.match(/\d+/g)?.map(Number) || [];
    
    // Format each number
    return cleaned.replace(/\d+/g, (match) => {
      const num = parseInt(match, 10);
      if (num >= 1000000) return `${(num/1000000).toFixed(1)}M`;
      if (num >= 1000) return `${(num/1000).toFixed(0)}k`;
      return match;
    });
  };

  const CompanyIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
      <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"/>
      <path d="M10 6h4"/>
      <path d="M10 10h4"/>
      <path d="M10 14h4"/>
      <path d="M10 18h4"/>
    </svg>
  );
  
  const LocationIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
  
  const CalendarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
  );

  return (
    <div className="card-color rounded-lg p-6 shadow-sm transition-all hover:shadow-md max-w-auto mx-auto">
      {/* Job Title and Meta Information */}
      <div>
        <h3 className="text-xl font-semibold text-primary mb-2">{job.title}</h3>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-m text-muted-foreground">
          {/* Company */}
          <div className="flex items-center gap-2">
            <CompanyIcon />
            <span>{job.company}</span>
          </div>
          
          {/* Location */}
          {job.location && (
            <div className="flex items-center gap-2">
              <LocationIcon />
              <span>{job.location}</span>
            </div>
          )}
          
          {/* Posted Date */}
          {job.posted_date && (
            <div className="flex items-center gap-2">
              <CalendarIcon />
              <span>Posted {job.posted_date}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {/* Experience Level */}
        {job.experienceLevel && (
          <div className="text-xs inline-block px-3 py-1 rounded-full experience-level-style card-color font-semibold">
            {job.experienceLevel}
          </div>
        )}

        {/* Salary*/}
        {job.salary && (
          <div className="text-xs inline-block px-3 py-1 rounded-full card-color blue-text font-semibold">
            {formatSalary(job.salary)}
          </div>
        )}
      </div>

      {/* Description with Toggle */}
      <div className="mt-4">
        <h4 
          className="text-sm font-medium text-primary cursor-pointer flex items-center gap-1"
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
        >
          Description
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${isDescriptionOpen ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </h4>
        <div className="mt-2 text-sm text-muted-foreground">
          {isDescriptionOpen ? job.description : truncateText(job.description)}
          {!isDescriptionOpen && job.description?.length > 150 && (
            <span 
              className="cursor-pointer ml-1"
              onClick={(e) => {
                e.stopPropagation();
                setIsDescriptionOpen(true);
              }}
            >
            </span>
          )}
        </div>
      </div>

      {/* Requirements with Toggle */}
      {job.requirements && job.requirements.length > 0 && (
        <div className="mt-4">
          <h4 
            className="text-sm font-medium text-primary cursor-pointer flex items-center gap-1"
            onClick={() => setIsRequirementsOpen(!isRequirementsOpen)}
          >
            Requirements
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${isRequirementsOpen ? "rotate-180" : ""}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </h4>
          <div className="mt-2 text-sm text-muted-foreground">
            <ul className="list-disc pl-3 [&>li]:marker:text-[#60a5fa]">
              {isRequirementsOpen ? (
                job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))
              ) : (
                <>
                  {job.requirements.slice(0, 2).map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                  {job.requirements.length > 2 && (
                    <li className="list-none">
                      <span 
                        className="text-xs text-muted-foreground cursor-pointer pl-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsRequirementsOpen(true);
                        }}
                      >
                        +{job.requirements.length - 2} more requirements...
                      </span>
                    </li>
                  )}
                </>
              )}
            </ul>
          </div>
          
        </div>
      )}

      {/* Apply Button */}
      {job.url && (
        <div className="mt-6">
          <a 
            href={job.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center h-10 rounded-md apply-button text-sm gap-2"
          >
            Apply Now
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
              className="flex-shrink-0"
            >
              <path d="M15 3h6v6"/>
              <path d="M10 14 21 3"/>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default JobCard;