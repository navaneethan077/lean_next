import Link from "next/link";
export default function home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-green-200 min-h-screen flex flex-col items-center justify-center">
      
      <h1>  Nava io </h1>
      <Link href="/dashboard/" className="text-blue-500 hover:text-blue-700">dashboard</Link>
      <Link href="/dashboard/about" className="text-blue-500 hover:text-blue-700">About</Link>
      <Link href="/dashboard/settings" className="text-blue-500 hover:text-blue-700">setting</Link>
      </div>

    </div>
  );
}