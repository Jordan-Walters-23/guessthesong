import { Header, Welcome, Footer } from "@/components";

 
export default function Home() {
  return (
    <div className="h-screen grid place-item-center bg-gradient-to-b from-teal-600 to-teal-950">
      {/* <Header /> */}
      <Welcome />
      {/* <Footer /> */}
    </div>  
  );
}