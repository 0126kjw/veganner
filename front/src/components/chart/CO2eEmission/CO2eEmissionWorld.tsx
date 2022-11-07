import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import worldData from "../../../assets/data-analysis/json/1990-2019_World.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: "top" as const,
      //display: false,
    },
    title: {
      display: true,
      text: "1990-2019년 전 세계 대륙별 온실가스 배출량",
      font: {
        size: 18,
      },
    },
  },
  scales: {
    x: {
      grid: {
        //display: false,
        color: "#E3E3E3",
      },
    },
    y: {
      grid: {
        //display: false,
        color: "#E3E3E3",
        // tickBorderDash: [0, 10],
      },
      title: {
        display: true,
        text: "단위: 100만톤(Mt)",
      },
    },
  },
};

const yearArr = Object.keys(Object.values(worldData)[0]).map(
  (item) => Number(item) + 1990
);
const continentArr = Object.keys(worldData);
const getEmissionArr = (i: number) => {
  return Object.values(Object.values(worldData)[i]);
};
const data = {
  // 1990 - 2019년
  labels: yearArr,
  datasets: [
    {
      label: continentArr[0],
      backgroundColor: "#e60049",
      data: getEmissionArr(0),
      borderColor: "#e60049",
      //borderWidth: 1,
    },
    {
      label: continentArr[1],
      backgroundColor: "#0bb4ff",
      data: getEmissionArr(1),
      borderColor: "#0bb4ff",
      //borderWidth: 1,
    },
    {
      label: continentArr[2],
      backgroundColor: "#50e991",
      data: getEmissionArr(2),
      borderColor: "#50e991",
      //borderWidth: 1,
    },
    {
      label: continentArr[3],
      backgroundColor: "#ffa300",
      data: getEmissionArr(3),
      borderColor: "#ffa300",
      //borderWidth: 1,
    },
    {
      label: continentArr[4],
      backgroundColor: "#9b19f5",
      data: getEmissionArr(4),
      borderColor: "#9b19f5",
      //borderWidth: 1,
    },
    {
      label: continentArr[5],
      backgroundColor: "#dc0ab4",
      data: getEmissionArr(5),
      borderColor: "#dc0ab4",
      //borderWidth: 1,
    },
    {
      label: continentArr[6],
      backgroundColor: "#04BF8A",
      data: getEmissionArr(6),
      borderColor: "#04BF8A",
      //borderWidth: 1,
    },
  ],
};

function CO2eEmissionWorld() {
  return (
    <Container>
      <Line options={options} data={data} />
    </Container>
  );
}

export default CO2eEmissionWorld;

const Container = styled.div`
  width: 750px;
`;
