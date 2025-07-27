import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { PostCard } from "@/components/common/PostCard";
import { useState,useEffect } from "react";
export default function Posts() {

    const [posts, setPosts] = useState<PostProps[]>([]); 
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())  
      .then(data => setPosts(data));     
  }, []); 
  return (
  <div>
      {posts.map(post => (
        <PostCard
          key={post.id}      // Unique key for React list rendering
          title={post.title} 
          body={post.body}    
          userId={post.userId} 
        />
      ))}
    </div>
  );
}