import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { marketData, marketOptions } from "../utils/ChartData";

const MarketChart = () => {
  return (
    <Chart>
      <Line data={marketData} width={5} height={5} options={marketOptions} />
    </Chart>
  );
};

const Chart = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
`;

export default MarketChart;
