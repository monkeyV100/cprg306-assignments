import React from 'react';
import Link from 'next/link';  // Import Link from next/link
import NewItem from './new-item'; 

function Page() {
  return (
    <div>
      <h1>Week 4 Page</h1>
      <NewItem /> 

      {/* Added the following div for the back button */}
      <div style={{ marginTop: '20px' }}>
        <Link href="/"> {/* This link navigates back to the homepage */}
          <a>
            <button>Go Back to Home Page</button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Page;
