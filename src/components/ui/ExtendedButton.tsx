
import React from "react";
import { Button as ShadcnButton, buttonVariants } from "./button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

export interface ExtendedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
  Omit<VariantProps<typeof buttonVariants>, "variant"> {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary";
  size?: "default" | "sm" | "lg" | "icon";
  fullWidth?: boolean;
  isLoading?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

const ExtendedButton = React.forwardRef<HTMLButtonElement, ExtendedButtonProps>(
  ({ 
    children, 
    className, 
    variant = "default", 
    size = "default", 
    fullWidth = false,
    isLoading = false,
    rightIcon,
    leftIcon,
    ...props 
  }, ref) => {
    // Map custom variant to shadcn variants
    let shadcnVariant: string | undefined = variant;
    
    // Handle custom 'primary' variant
    if (variant === "primary") {
      shadcnVariant = "default";
    }
    
    // Create combined className with fullWidth option
    const combinedClassName = cn(
      className,
      fullWidth && "w-full",
      variant === "primary" && "bg-blue-600 hover:bg-blue-700 text-white"
    );
    
    return (
      <ShadcnButton
        ref={ref}
        variant={shadcnVariant as any}
        size={size}
        className={combinedClassName}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </ShadcnButton>
    );
  }
);

ExtendedButton.displayName = "ExtendedButton";

export default ExtendedButton;
