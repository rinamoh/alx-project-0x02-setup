import Header from "@/components/layout/Header"

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to HOme page!</h1>
        <p>Check your terminal for errors.</p>
      </main>
    </div>
  );
}