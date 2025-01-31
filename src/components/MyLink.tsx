import React, { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface MyLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  extraFunction?: () => void;
}

const MyLink: React.FC<MyLinkProps> = ({
  to,
  children,
  className,
  extraFunction,
}) => {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;

  const handleClick = () => {
    if (extraFunction) {
      extraFunction();
    }
    const element = document.querySelector(`#${to}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      navigate(`/?id=${to}`);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default MyLink;
