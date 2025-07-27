import { useState } from 'react';

export const PostModal = ({ onSubmit }: { onSubmit: (title: string, content: string) => void }) => {
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    onSubmit(title, content); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)} 
          placeholder="Content"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};