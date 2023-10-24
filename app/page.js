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
      <div>
        <Link href="/week5">Week5</Link> {/* Added line for Week 5 */}
      </div>
      <div>
        <Link href="/week6">Week6</Link> {/* Added line for Week 5 */}
      </div>
      <div>
        <Link href="/week7">Week7</Link> {/* Added line for Week 5 */}
      </div>
    </div>
  );
}