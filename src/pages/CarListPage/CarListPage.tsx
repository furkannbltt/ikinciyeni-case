import PageHeader from "./components/PageHeader/PageHeader";
import { CarModel, mockData, mockFilterData } from "../../models/model";
import CarList from "./components/CarList";
import FilterMenus from "./components/FilterMenu";
import "./style.scss";
import { useState } from "react";

const CarListPage: React.FC = () => {
  const [cars] = useState<CarModel[]>([...mockData]);
  const [filteredCars, setFilteredCars] = useState<CarModel[]>([...mockData]);

  return (
    <div className="card-list-page-container">
      <PageHeader carCount={filteredCars.length} />
      <div className="content">
        <FilterMenus
          initialData={cars}
          handleFilter={setFilteredCars}
          filterMenuData={mockFilterData}
        />
        <CarList cars={filteredCars} />
      </div>
    </div>
  );
};

export default CarListPage;
