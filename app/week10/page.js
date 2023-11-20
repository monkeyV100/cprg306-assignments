"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";


const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  
    return (
      <div>
        {!user ? ( // If the user is not logged in
          <div>
            <p>You are not logged in.</p>
            <button onClick={gitHubSignIn}>Log in with GitHub</button>
          </div>
        ) : (
          // If the user is logged in
          <div>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={firebaseSignOut}>Log Out</button> 

            <Link href="/week10/shopping-list">Go to Shopping List</Link>
            <Link href="/"> 
                    <button>Go Back to Home Page</button>
                </Link>


          </div>
        )}
      </div>
    );
  };
  
  export default Page;
  