import { UserCard } from '../components/common/UserCard';
import { UserProps } from '../interfaces';


export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return { props: { users } }; // Passes data to the page component
}

export default function UsersPage({ users }: { users: UserProps[] }) {
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}