import Header from "@/components/layout/Header"
import Card from "@/components/common/Card";
import { useState } from 'react';
import { PostModal } from '../components/common/PostModal';



export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
  const [posts, setPosts] = useState<{title: string, content: string}[]>([]); // Posts array
  return (
    <div>
      <Header />
     <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button> {/* Button to open modal */}

      {isModalOpen && (
        <PostModal
          onSubmit={(title, content) => {
            setPosts([...posts, {title, content}]); // Add new post to array
            setIsModalOpen(false); // Close modal
          }}
        />
      )}

      <div>
        {posts.map((post, index) => ( // Display all posts
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
    </div>
  );
}