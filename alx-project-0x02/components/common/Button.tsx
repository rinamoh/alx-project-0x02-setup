import { ButtonProps } from "@/interfaces";  // Import the interface we just created

export const Button = ({ size, shape, children }: ButtonProps) => {
  // Size classes mapping
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',  // Small button styles
    medium: 'py-2 px-4 text-base',  // Medium button styles
    large: 'py-3 px-6 text-lg'  // Large button styles
  };

  return (
    <button
      className={`${sizeClasses[size]} ${shape} bg-blue-500 text-white`}  // Combine all classes
    >
      {children}  // Render button content
    </button>
  );
};