import Link from "next/link";
export default function Header() {
return (
    <header>
      <nav>
        {/* Link to home page */}
        <Link href="/home">Home</Link>
        
        {/* Link to about page */}
        <Link href="/about">About</Link>
        
        {/* Link to posts page */}
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
}