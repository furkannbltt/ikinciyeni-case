import React, { ReactNode } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./style.scss"

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default AppLayout;
