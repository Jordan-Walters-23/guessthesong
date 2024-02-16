import Link from "next/link";

// `app/choose/page.tsx` is the UI for the `/choose` URL
export default function Page() {
  return (
    <>
      <h1>Hello, Choose Page!</h1>
      <Link href="/guess">Play</Link>
    </>
  );
}
