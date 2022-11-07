import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y" as const,
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: true,
  },
  plugins: {
    legend: {
      //position: "right" as const,
      display: false,
    },
    title: {
      display: true,
      text: "온실가스 배출량 상위 15개국(2019년)",
    },
  },
  // 옵션 (3)
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
      },
    },
  },
};

const data = {
  labels: [
    "중국",
    "미국",
    "인도",
    "러시아",
    "일본",
    "이란",
    "독일",
    "인도네시아",
    "캐나다",
    "대한민국",
    "사우디아라비아",
    "남아프리카공화국",
    "멕시코",
    "브라질",
    "오스트레일리아",
  ],
  datasets: [
    {
      // type: "bar",
      //label: "Dataset 1",
      //backgroundColor: "rgb(255, 99, 132)",
      //backgroundColor: "#004d43",
      backgroundColor: "#04BF8A",
      data: [
        99.48, 46.65, 39.72, 33.3, 28.53, 26.87, 23.88, 13.63, 12.31, 9.87,
      ],
      borderColor: "#03A64A",
      borderWidth: 1,
    },
  ],
};

function CO2eTop15Bar() {
  return (
    <Container>
      <Bar options={options} data={data} />
    </Container>
  );
}

export default CO2eTop15Bar;

const Container = styled.div`
  width: 500px;
`;
