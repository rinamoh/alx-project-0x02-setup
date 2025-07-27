export interface UserProps {
  id: number;          
  name: string;      
  email: string;     
  address: {         
    street: string;  
    suite: string;   
    city: string;     
    zipcode: string; 
  };
}
export interface PostProps {
  title: string;      
  body: string;       
  userId: number;     
}
export interface ButtonProps {
  size: 'small' | 'medium' | 'large';  
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';  
  children: React.ReactNode;  
}

export interface CardProps{
  title:string,
  content:string
}

export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

