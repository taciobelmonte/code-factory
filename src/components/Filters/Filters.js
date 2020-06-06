/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Input, FiltersContainer, InputContainer, Flex } from "./Filters.styled";

const Filters = ({ sendFilters }) => {
  const [filters, setFilters] = useState({
    orderAlpha: false,
    orderReverseAlpha: false,
    text: "",
  });

  useEffect(() => {
    if (filters !== {}) sendFilters(filters);
  }, [filters]);

  return (
    <FiltersContainer>
      <InputContainer>
        <Input
          className="full"
          type="text"
          onChange={(e) =>
            setFilters((filters) => {
              return {
                ...filters,
                text: e.target.value,
              };
            })
          }
          placeholder="Filter by Text"
          value={filters.text}
        />
      </InputContainer>

      <InputContainer>
        <Input
          className="full"
          placeholder="Filter by Min Rating"
          type="number"
          onChange={(e) =>
            setFilters((filters) => {
              return {
                ...filters,
                minRating: parseInt(e.target.value),
              };
            })
          }
          defaultValue={filters.minRating && filters.minRating}
        />
      </InputContainer>

      <Flex>
        <InputContainer>
          <label>Order alphabetically?</label>
          <Input
            name="orderAlpha"
            type="checkbox"
            onChange={(e) =>
              setFilters((filters) => {
                return {
                  ...filters,
                  orderAlpha: !filters.orderAlpha,
                };
              })
            }
            defaultValue={filters.orderAlpha && filters.orderAlpha}
          />
        </InputContainer>
        <InputContainer>
          <label>Reverse order?</label>
          <Input
            name="orderReverseAlpha"
            type="checkbox"
            onChange={(e) =>
              setFilters((filters) => {
                return {
                  ...filters,
                  orderReverseAlpha: !filters.orderReverseAlpha,
                };
              })
            }
            defaultValue={
              filters.orderReverseAlpha && filters.orderReverseAlpha
            }
          />
        </InputContainer>
      </Flex>
    </FiltersContainer>
  );
};

export default Filters;
