import Link from "next/link";

import StudentInfo from "./studentinfo/studentinfo.jsx";

export default function HomePage(){
  return (
    <div>
      <StudentInfo />
      <div>
        <Link href="/week2">Week2</Link>
      </div>
      <div>
        <Link href="/week3">Week3</Link>
      </div>
      <div>
        <Link href="/week4">Week4</Link>
      </div>
    </div>
  );
}