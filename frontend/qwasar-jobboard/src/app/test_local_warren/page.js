'use client';

import JobsJson from '../components/filter';
import { useState } from 'react';

// homepage function call for components
export default function HomePage() {
  const [searchInput, setSearchInput] = useState('')
  return (
    <>
    <div todo='jobsjsonborder'>
      <JobsJson/>
    </div>
    </>
  );
}

