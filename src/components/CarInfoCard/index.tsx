import { Button, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import { CarModel } from "../../models/model";
import "./style.scss";

interface IProps {
  model: CarModel;
}
const CarInfoCard: React.FC<IProps> = ({ model }) => {
  return (
    <div className="car-info-card-container">
      <div className="image-side">
        <img src={model.img} alt="car" />
      </div>
      <div className="info-side">
        <div className="top">
          <div className="title">
            <Typography variant="h5">{model.brand}</Typography>
            <StarIcon />
          </div>
          <div className="subtitle">
            <Typography variant="caption">{model.model}</Typography>
          </div>
        </div>
        <div className="bottom">
          <Typography variant="caption" component={"span"}>
            {model.modelYear}
          </Typography>
          <Typography variant="caption" component={"span"}>
            {model.color}
          </Typography>
          <Typography variant="caption" component={"span"}>
            {model.kilometer}
          </Typography>
          <Typography variant="caption" component={"span"}>
            {model.gearType}
          </Typography>
          <Typography variant="caption" component={"span"}>
            {model.fuelType}
          </Typography>
          <Typography variant="caption" component={"span"}>
            {model.otherInfo}
          </Typography>
        </div>
      </div>
      <div className="purchasing-side">
        <div className="top">
          <Typography variant="caption" component="span">
            Satış Fiyatı / TL
            <InfoIcon />
          </Typography>
          <Typography variant="h6">{model.price}</Typography>
        </div>
        <div className="bottom">
          <Button variant="contained" color="primary">
            Hemen Al
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarInfoCard;
