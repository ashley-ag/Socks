import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import API from "../utils/API";

const HomeChart = () => {
  const [chartData, setChartData] = useState([]);
  // load all stocks and set them to stocks
  useEffect(() => {
    loadStocks();
  }, []);

  function loadStocks() {
    API.getStocks()
      .then((res) => setChartData(res.data))
      .catch((err) => console.log(err));
  }
  const unitNum = chartData.map((stock) => stock.units);
  const stockName = chartData.map((stock) => stock.name);

  const personalData = {
    labels: stockName,
    datasets: [
      {
        label: "# of Units",
        data: unitNum,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(102, 255, 242, 0.2)",
          "rgba(99, 255, 112, 0.2)",
          "rgba(204, 207, 10, 0.2)",
          "rgba(221, 10, 133, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(167, 43, 26, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(102, 255, 242, 1)",
          "rgba(99, 255, 112, 1)",
          "rgba(204, 207, 10, 1)",
          "rgba(221, 10, 133, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(167, 43, 26,1)",
        ],
        borderWidth: 1,
      },
    ],
  };

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
