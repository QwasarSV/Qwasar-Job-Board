'use client';
import React, { useState } from 'react';

//  sort jobs depending on filter choice(s)

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