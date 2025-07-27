import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { PostCard } from "@/components/common/PostCard";

export default function Posts({ posts }: { posts: PostProps[] }) {
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  return { props: { posts } }
}