import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { data } from "../utils/ChartData";

const HomeChart = () => {
  return (
    <Chart>
      <Doughnut
        data={data}
        width={5}
        height={3}
        options={{ maintainAspectRatio: false }}
      />
    </Chart>
  );
};

const Chart = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default HomeChart;
