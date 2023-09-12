import Link from "next/link";

import StudentInfo from "./studentinfo/studentinfo.jsx";

export default function HomePage(){
  return (
    <div>
      <StudentInfo></StudentInfo>
    <Link href={"/week2"}>Week2</Link>
    </div>
  );
}