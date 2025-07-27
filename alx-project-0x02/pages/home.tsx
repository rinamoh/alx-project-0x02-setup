import Header from "@/components/layout/Header"
import Card from "@/components/common/Card";
export default function HomePage() {
  return (
    <div>
      <Header />
       <div>
      <Header />
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      
      <Card 
        title="First Card" 
        content="This is the content for the first card component." 
      />
      
      <Card 
        title="Second Card" 
        content="Different content for the second card." 
      />
      
      <Card 
        title="Third Card" 
        content="Yet another example of card content." 
      />
    </div>
    </div>
  );
}