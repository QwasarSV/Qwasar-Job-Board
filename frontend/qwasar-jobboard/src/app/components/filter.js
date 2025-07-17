'use client';
import React, { useState, Text } from 'react';

//  sort jobs depending on filter choice(s) by user
export default function JobsJson() {
    //  filter logic below
    //  ------------
    //  sample json for testing
    let jobsJson = "./local_docker_testing/local_docker_results.json"

    //  return jobs posted since specified date
    function jobDatePosted(jobs, chosenDate) {
        //  resultArray = []
        //  iterate through jobs, only append from date until today
        //  sort results by most recent to least recent
        //  return jobs
    }

    //  general job experience levels
    //  0 - 1 year
    //  1 - 3 years
    //  3 - 5 years
    //  5 - 10 years
    //  10+ years?
    function jobExperience(jobs, minExperience="none", maxExperience="") {
        //  if minExperience is none or empty and maxExperience is empty, return nothing
        //  return jobs between minExperience and maxExperience
    }

    //  intern
    //  entry
    //  junior
    //  mid level
    //  senior
    //  management
    //  staff?
    //  executive?
    function jobLevel(jobs, minLevel="entry", maxLevel="") {

    }

    function jobCompany(jobs, companyName) {
        //  return only jobs from companyName
    }

    //FEATURE/IDEA - company subsidiary jobs?


    //  miles = 30 miles - 200 miles?
    //  city,state,country only
    function jobLocation(jobs, location) {
        //  get user default location from profile or input location
        //  return sorted jobs by closest location
    }

    //  30k - 500k? 10k increments
    function jobSalary(jobs, minSalary='', maxSalary='') {
        //  if minSalary + maxSalary are empty, do nothing
        //  return jobs with salaries within min + max salary
    }

    //TODO might need to refactor for multiple choice
    //  remote, hybrid, on-site
    function jobType(jobs, jobType){
        //  return results with any chosen job type(s)
    }

    //TODO  might need to refactor for multiple choice
    //  hourly, salary, contract - one-time, 
    function jobPayType(jobs, payType) {
        //  return jobs with all specified pay types
    }

    //TODO  xyz industry - need to research
    function jobIndustry(jobs, industry) {
        //  return jobs with matching industry
    }

    function jobMaxResults(number) {
        //  return only this many number of jobcards
    }

    //  ---------------
    //  filters below for ui + ux
    function ExperienceFilter() {
        //  -----design notes
        //  text
        //  dropdown - list of choices
            //  onclick for selection
        return (
            <>
            <br></br>
            <text
                style={{ backgroundColor: 'gray', color: 'black' }}>
                    Experience</text>
            <p></p>
            <select>
                <option 
                value="entry" 
                style={{ backgroundColor: 'gray', color: 'black' }}>
                    Entry</option>
                <option 
                value="mid" 
                style={{ backgroundColor: 'gray', color: 'black' }}>
                    Mid Level</option>
                <option 
                value="senior" 
                style={{ backgroundColor: 'gray', color: 'black' }}>
                    Senior</option>
            </select>
            </>
        );
    }

    function DatePostedFilter() {
        //feature/idea - buttons of most commonly used date(s)
        //             - yesterday, 1-3 days, 1 week, 2 weeks, 1 month, etc

        //  -----design notes
        //  text
        //  textbox
        return (
            <>
            <br></br>
            <text
                style={{ backgroundColor: 'gray', color: 'black' }}>
                    Date Posted</text>
            <p></p>
            <input 
                type='text' 
                style={{ backgroundColor: 'gray', color: 'black' }}
                placeholder='Date Posted'>
                </input>
            </>
        );
    }

    function CompanyFilter() {
        //  -----design notes
        //  text
        //  textbox
        return (
            <>
            <br></br>
            <text
                style={{ backgroundColor: 'gray', color: 'black' }}>
                    Company</text>
            <p></p>
            <input 
                type='text' 
                style={{ backgroundColor: 'gray', color: 'black' }}
                placeholder='Company'>
                </input>
            </>
        );
    }

    function FilterResetButton() {
        //  -----design notes
        //  button - text -> "Reset"
        return (
            <button 
                style={{ backgroundColor: 'red', color: 'black' }}>
                    Reset
            </button>
        );
    }

    return (
    <>
        <p
            style={{ backgroundColor: 'gray', color: 'black' }}>
            Searchbar
        </p>
        <div>

        </div>
        <p></p>
        <div>
            <ExperienceFilter></ExperienceFilter>
            <FilterResetButton></FilterResetButton>
            <br></br>
            <DatePostedFilter></DatePostedFilter>
            <FilterResetButton></FilterResetButton>
            <br></br>
            <CompanyFilter></CompanyFilter>
            <FilterResetButton></FilterResetButton>
        </div>
    </>
        //  -----design notes
        //  searchbar - textbox
        //  filter icon - "filters"
        //  experience  date_posted company
        //  dropdown    dropdown    textbox

        //  results -> person icon x job(s) found

        //  list job(s) below
        //  -----end design notes

        //  -----psuedocode/plan

        // <>
        //     <div >
        //         <div>

        //         </div>
        //         <div>

        //         </div>
        //         <div>

        //         </div>
        //     </div>
        // </>
    );
}