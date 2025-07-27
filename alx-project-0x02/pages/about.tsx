import Header from "@/components/layout/Header"

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to About Page!</h1>
        <p>Check your terminal for errors.</p>
      </main>
    </div>
  );
}