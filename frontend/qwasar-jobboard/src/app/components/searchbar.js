'use client';

import React, { useState } from 'react'

export default function SearchBar({ setSearchInput }) {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        const value = e.target.value
        setInput(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchInput(input);
    }
    
    return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-800">
      <form onSubmit={handleSubmit}>
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:text-white"
            placeholder="Search..."
            autoComplete="off"
            value={input}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

/* BASIC SYLING IDEA */
    // return (
    // <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height:'100vh',backgroundColor:''}}>
    //     <form onSubmit={handleSubmit} display>
    //     <input
    //         className='searchbar_input'
    //         type="text"
    //         placeholder="Search..."
    //         onChange={handleChange}
    //         value={input}
    //     />
    //     <button type="submit">SUBMIT</button>
    // </form>
    // </div>
 
    // )
