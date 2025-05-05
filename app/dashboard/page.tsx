"use client";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  const router = useRouter();
  const handleNext = () => {
    router.push("/dashboard/about");
  };
  const handleBack = () => {  
    router.push("/");
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-green-700 min-h-screen flex flex-col items-center justify-between">
      
      <h1>  Nava io  dashboard</h1>
      {/* <Link href="/dashboard/" className="text-blue-500 hover:text-blue-700">dashboard</Link> */}
      {/* <Link href="/dashboard/about" className="text-blue-500 hover:text-blue-700">About</Link>
      <Link href="/dashboard/settings" className="text-blue-500 hover:text-blue-700">setting</Link> */}
      <button onClick={handleNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded gap-1"> next</button>
      <button  onClick={handleBack}  className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> back</button>
      </div>

    </div>
  );
}