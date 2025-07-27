import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav className="flex gap-4">
        <Link href="/home" className="hover:underline">
          Home
        </Link>
        <br />
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
}