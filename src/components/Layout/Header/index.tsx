/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.scss";
import { Button, Typography } from "@mui/material";

const menuItems = [
  { text: "Açık Artırma", link: "#" },
  { text: "Araç Al", link: "#" },
  { text: "Araç Sat", link: "#" },
  { text: "Filonu Sat", link: "#" },
  { text: "Ekspertiz Al", link: "#" },
  { text: "Lojistik Al", link: "#" },
];

const Header: React.FC = () => {
  return (
    <div className="app-header">
      <div className="logo-side">
        <div className="logo">
          <img src="ikinciyenilogo.png" alt="logo" />
        </div>
        <div className="logo">
          <img src="anadolugrubu.png" alt="anadolu-logo" />
        </div>
      </div>
      <div className="nav-list-side">
        {menuItems.map((item, index) => (
          <div
            key={item.text}
            className={`link-wrapper ${index === 2 && "checked"}`}
          >
            <Typography variant="body1" component="span">
              <a className="link" href="#">
                {item.text}
              </a>
            </Typography>
          </div>
        ))}
        <Button variant="contained" color="primary">
          Giriş Yap
        </Button>
      </div>
    </div>
  );
};

export default Header;
