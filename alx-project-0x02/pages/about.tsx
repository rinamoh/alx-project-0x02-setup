import Header from "@/components/layout/Header"
import { Button} from "@/components/common/Button";


export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to About Page!</h1>
        <p>Check your terminal for errors.</p>
      </main>
       <Button size="small" shape="rounded-sm">
        Small Button
      </Button>

      {/* Medium button with medium rounding */}
      <Button size="medium" shape="rounded-md">
        Medium Button
      </Button>

      {/* Large button with full rounding */}
      <Button size="large" shape="rounded-full">
        Large Button
      </Button>
    </div>
  );
}