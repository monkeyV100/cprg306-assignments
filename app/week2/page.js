import React from 'react';
import Link from 'next/link';
import StudentInfo from "../studentinfo/studentinfo.jsx";

export default function ShoppingList(){
    return(
        <div>
            <h1>My Shopping List</h1>
            <StudentInfo />

            <div style={{ marginTop: '20px' }}>
                <Link href="/"> 
                    <button>Go Back to Home Page</button>
                </Link>
            </div>
        </div>
    );
}
