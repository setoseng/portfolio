import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
}) => {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-200 transform hover:scale-105";

  const variantClasses = {
    primary: "text-white shadow-lg hover:shadow-xl",
    secondary: "border-2",
    outline: "border-2 bg-transparent",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const colorClasses = {
    primary: { backgroundColor: "#0551FA" },
    secondary: { borderColor: "#0551FA", color: "#0551FA" },
    outline: { borderColor: "#0551FA", color: "#0551FA" },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={colorClasses[variant]}
    >
      {children}
    </button>
  );
};

export default Button;
