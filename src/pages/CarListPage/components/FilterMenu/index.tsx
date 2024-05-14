import React, { ChangeEvent, useState } from "react";
import {
  CarModel,
  FilterMenu as FilterMenuModel,
  FilterType,
} from "../../../../models/model";
import "./style.scss";
import { Button, Checkbox, TextField, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface IProps {
  filterMenuData: FilterMenuModel[];
  initialData: CarModel[];
  handleFilter: (data: CarModel[]) => void;
}

const FilterMenus: React.FC<IProps> = ({
  filterMenuData,
  initialData,
  handleFilter,
}) => {
  const [closeMenus, setCloseMenus] = useState<{ [key: number]: boolean }>({});
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[];
  }>({});

  const [selectedRange, setSelectedRange] = useState<{
    [key: string]: { max: number; min: number };
  }>({});

  const toggleMenu = (index: number) => {
    setCloseMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleRangeChange = (
    value: number,
    key: string,
    type: "min" | "max"
  ) => {
    setSelectedRange((prev) => ({
      ...prev,
      [key]: {
        ...(prev[key] || {}),
        [type]: value || 0,
      },
    }));
  };

  const toggleOption = (filterKey: string, option: string | number) => {
    setSelectedOptions((prev) => {
      const selected = prev[filterKey] ? [...prev[filterKey]] : [];
      const index = selected.indexOf(option.toString());
      if (index === -1) {
        selected.push(option.toString());
      } else {
        selected.splice(index, 1);
      }
      return {
        ...prev,
        [filterKey]: selected,
      };
    });
  };

  const filterData = () => {
    let filteredData = [...initialData];
    for (const key in selectedOptions) {
      if (selectedOptions[key].length) {
        filteredData = filteredData.filter((item) =>
          selectedOptions[key].includes(String(item[key as keyof CarModel]))
        );
      }
    }

    for (const key in selectedRange) {
      const range = selectedRange[key];
      if (range && (range.min || range.max)) {
        filteredData = filteredData.filter((item) => {
          const value = item[key as keyof CarModel] as number;
          return (!range.min || value >= range.min) && (!range.max || value <= range.max);
        });
      }
    }
    handleFilter(filteredData);
  };

  const renderOptions = (
    options: FilterMenuModel["options"],
    filterKey: string
  ) => (
    <div className="options">
      {options &&
        options.map((option, idx) => (
          <div className="option" key={idx}>
            <Checkbox
              checked={selectedOptions[filterKey]?.includes(option.toString())}
              onChange={() => toggleOption(filterKey, option)}
            />
            <Typography variant="body1">{option}</Typography>
          </div>
        ))}
    </div>
  );

  const renderRangeContainer = (filterKey: string) => (
    <div className="range-container">
      <TextField
        type="number"
        label="Min"
        variant="outlined"
        size="small"
        value={selectedRange[filterKey]?.min || ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleRangeChange(e.target.valueAsNumber, filterKey, "min")
        }
      />
      <TextField
        type="number"
        label="Max"
        variant="outlined"
        size="small"
        value={selectedRange[filterKey]?.max || ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleRangeChange(e.target.valueAsNumber, filterKey, "max")
        }
      />
    </div>
  );

  const renderMenu = (menu: FilterMenuModel, index: number) => {
    if (closeMenus[index]) return null;
    switch (menu.type) {
      case FilterType.Checkbox:
        return renderOptions(menu.options, menu.filterKey);
      case FilterType.MaxMin:
        return renderRangeContainer(menu.filterKey);
      default:
        return null;
    }
  };

  return (
    <div className="filter-menus-container">
      {filterMenuData.map((menu, index) => (
        <div className="filter-menu" key={index}>
          <div className="header" onClick={() => toggleMenu(index)}>
            <Typography variant="subtitle1">{menu.filterName}</Typography>
            {!closeMenus[index] ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </div>
          {renderMenu(menu, index)}
        </div>
      ))}
      <div className="footer">
        <Button variant="contained" color="primary" onClick={filterData}>
          Filtrele
        </Button>
      </div>
    </div>
  );
};

export default FilterMenus;
