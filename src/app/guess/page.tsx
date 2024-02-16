import Link from "next/link";

// `app/guess/page.tsx` is the UI for the `/guess` URL
export default function Page() {
  return (
    <>
      <h1>Hello, Guess Page!</h1>
      <Link href="/guess">Guess again</Link>
      <Link href="/">New songs</Link>
    </>
  );
}
