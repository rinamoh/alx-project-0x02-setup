import { UserProps } from "@/interfaces";

export const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div>
      <h3>{name}</h3>                     
      <p>{email}</p>                     
      <p>
        {address.street}, {address.suite}  
        <br />
        {address.city}, {address.zipcode}  
      </p>
    </div>
  );
};