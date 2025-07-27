import { PostProps } from "@/interfaces";

export const PostCard = ({ title, body, userId }: PostProps) => {
  return (
    <div>
      <h3>{title}</h3>       
      <p>{body}</p>         
      <small>User: {userId}</small>  
    </div>
  );
};