import { ReactNode, HTMLAttributes } from "react";

export interface IconButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const IconButton = ({ children, ...restProps }: IconButtonProps) => {
  return (
    <div className="h-12 border-2 border-gray-400 " {...restProps}>
      {children}
    </div>
  );
};

export default IconButton;
