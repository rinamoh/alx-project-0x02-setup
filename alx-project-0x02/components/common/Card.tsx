import { CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}