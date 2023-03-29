import { ReactNode, HTMLAttributes } from "react";

export interface IconButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const IconButton = ({ children, ...restProps }: IconButtonProps) => {
  return (
    <div
      className="flex items-center justify-center w-12 h-12 mr-2 border-2 border-gray-400 rounded-full"
      {...restProps}
    >
      {children}
    </div>
  );
};

export default IconButton;
