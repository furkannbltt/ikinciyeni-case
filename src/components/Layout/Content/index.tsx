import React, { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className="content-container">{children}</div>;
};

export default Content;
