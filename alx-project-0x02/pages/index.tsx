import Header from "@/components/layout/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to ALX!</h1>
        <p>Check your terminal for errors.</p>
      </main>
    </div>
  );
}

