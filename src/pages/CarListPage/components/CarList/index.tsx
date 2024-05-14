import React, { useState } from "react";
import { CarModel } from "../../../../models/model";
import "./style.scss";
import CarInfoCard from "../../../../components/CarInfoCard";
import { Pagination } from "@mui/material";

interface IProps {
  cars: CarModel[];
}

const itemsPerPage = 10;

const CarList: React.FC<IProps> = ({ cars }) => {
  const [page, setPage] = useState(1);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <div className="car-list-container">
      <div className="list">
        {cars
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((item: CarModel) => (
            <CarInfoCard model={item} key={item.brand} />
          ))}
      </div>
      <div className="pagination">
        <Pagination
          count={Math.ceil(cars.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default CarList;
