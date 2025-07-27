import { ButtonProps } from "@/interfaces";  

export const Button = ({ size, shape, children }: ButtonProps) => {
 
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',  
    medium: 'py-2 px-4 text-base', 
    large: 'py-3 px-6 text-lg' 
  };

  return (
    <button
      className={`${sizeClasses[size]} ${shape} bg-blue-500 text-white`}  // Combine all classes
    >
      {children}  // Render button content
    </button>
  );
};