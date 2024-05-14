import { Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListIcon from "@mui/icons-material/List";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import "./style.scss";

interface IProps {
  carCount: number;
}
const PageHeader: React.FC<IProps> = ({ carCount }) => {
  return (
    <div className="page-header-container">
      <div className="info-side">
        <Typography component="span">{carCount} Otomobil</Typography>
      </div>
      <div className="action-side">
        <div className="item">
          <StarIcon />
          <Typography component="span">Favori Araçlarım</Typography>
        </div>
        <div className="item">
          <Typography component="span">Son Eklenenler</Typography>
          <KeyboardArrowDownIcon />
        </div>

        <div className="list-type-switcher">
          <div className="type checked">
            <ListIcon />
          </div>
          <div className="type">
            <ViewCompactIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
