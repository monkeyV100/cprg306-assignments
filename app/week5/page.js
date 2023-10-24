import React from 'react';
import Link from 'next/link';  // Import Link from next/link
import ItemList from './item-list';

const Page = () => (
  <main>
    <h1>Shopping List</h1>
    <ItemList />

    {/* Added the following div for the back button */}
    <div style={{ marginTop: '20px' }}>
      <Link href="/"> {/* This link navigates back to the homepage */}
        <a>
          <button>Go Back to Home Page</button>
        </a>
      </Link>
    </div>
  </main>
);

export default Page;
