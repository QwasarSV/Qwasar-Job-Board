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
    // First clean the string by removing commas and normalizing separators
    const cleaned = salaryString
      .replace(/,/g, '') // Remove commas
      .replace(/\s*-\s*/g, ' - ') // Normalize hyphens
      .replace(/\s*\+\s*/g, '+') // Normalize plus signs
    
    // Extract all numbers (including ranges and bonuses)
    const numbers = cleaned.match(/\d+/g)?.map(Number) || [];
    
    // Format each number and maintain original structure
    return cleaned.replace(/\d+/g, (match) => {
      const num = parseInt(match, 10);
      if (num >= 1000000) return `${(num/1000000).toFixed(1)}M`;
      if (num >= 1000) return `${(num/1000).toFixed(0)}k`;
      return match; // Return original if not in shortening range
    });
  };

  return (
    <div className="card-color rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
      {/* Job Title and Meta Information */}
      <div>
        <h3 className="text-xl font-semibold text-primary mb-2">{job.title}</h3> {/* Increased to text-xl */}
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-m text-muted-foreground">
          {/* Company */}
          <span>{job.company}</span>
          
          {/* Location */}
          {job.location && (
            <span className="flex items-center">
              {job.location}
            </span>
          )}
          
          {/* Posted Date */}
          {job.postedDate && (
            <span className="flex items-center">
              Posted {job.postedDate}
            </span>
          )}
        </div>
      </div>

      {/* Salary*/}
      {job.salary && (
        <div className="mt-2 text-xs inline-block px-3 py-1 rounded-full card-color blue-text font-semibold">
          {formatSalary(job.salary)}
        </div>
      )}
      {/* Job Title and Company */}
      {/* <div>
        <h3 className="text-lg font-semibold text-primary">{job.title}</h3>
        <p className="text-muted-foreground">{job.company}</p>
      </div> */}
      
      {/* Location and Salary */}
      {/* <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
        <span>{job.location}</span>
        {job.salary && <span>• {job.salary}</span>}
      </div> */}

      {/* Job Type and Posted Date */}
      {/* <div className="mt-4 flex flex-wrap gap-2">
        {job.type && (
          <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
            {job.type}
          </span>
        )}
        {job.postedDate && (
          <span className="text-xs text-muted-foreground self-center">
            Posted {job.postedDate}
          </span>
        )}
      </div> */}

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
              {/* (Show more) */}
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
      {job.applyLink && (
        <div className="mt-6">
          <a 
            href={job.applyLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-text text-primary-foreground rounded hover:bg-blue-hover transition-colors"
          >
            Apply Now
          </a>
        </div>
      )}
    </div>
  );
};

export default JobCard;