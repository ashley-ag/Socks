import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { personalData } from "../utils/ChartData";

const HomeChart = () => {
  return (
    <Chart>
      <Doughnut
        data={personalData}
        width={5}
        height={5}
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
