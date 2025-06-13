'use client';
import { useState } from "react";
import { useEffect } from "react";

export default function JobList({ filter }) {
  const [jobs, setJobs] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // fetches our data from "database"
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };
    fetchJobs();
  }, [apiUrl]);

// if nothing has been typed into search bar do no display the jobs 
  if (!filter) return null;

  // filters jobs based on search input 
  const jobMatch = jobs.filter((job) => job.title.toLowerCase().includes(filter));
  if (jobMatch.length == 0) {
    return <p>No Jobs were found</p>
  }

  // displays jobs 
  return (
    <div>
      {jobMatch.map((job) => (
        <div key={job.id} className="border rounded-md p-4 my-2 shadow">
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p>
            {job.description}
          </p>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Salary:</strong> {job.salary}
          </p>
          <p>
            <strong>URL:</strong>{' '} <a href={job.url} target="blank">link</a>
          </p>
        </div>
      ))}
    </div>
  );
}