

/* will call navBar and Searchbar when code inside files*/

// import NavBar from './components/navbar';
// import SearchBar from './components/searchbar';
import JobListing from './components/joblisting';


// homepage function call for components
export default function HomePage(){
  return (
    <>
    <div className='joblisting_wrapper'>
      <JobListing/>
    </div></>
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
