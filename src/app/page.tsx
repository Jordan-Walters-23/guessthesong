import Image from "next/image";
import Link from 'next/link'
 
export default function Home() {
  return (
    <>
      <h1>Welcome to<br/>Guess the Song</h1>
      <Link href="/choose">Enter</Link>
    </>  
  );
}