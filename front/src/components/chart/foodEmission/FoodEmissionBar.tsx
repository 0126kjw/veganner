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
      text: "생산 과정에서 CO2e를 가장 많이 배출하는 음식 TOP10",
      font: {
        size: 14,
      },
    },
  },
  // 옵션 (3)
  scales: {
    x: {
      grid: {
        //display: false,
        color: "#E3E3E3",
      },
      title: {
        display: true,
        text: "CO2e 배출량(kg)",
      },
    },
    y: {
      grid: {
        //display: false,
        color: "#E3E3E3",
      },
      title: {
        display: true,
        text: "음식 생산량(1kg)",
      },
    },
  },
};

const data = {
  labels: [
    "Beef(beef herd)",
    "Dark Chocolate",
    "Lamb & Mutton",
    "Beef(dairy herd)",
    "coffee",
    "Shrimps(farmed)",
    "Cheese",
    "Fish(farmed)",
    "Pig Meat",
    "Poultry Meat",
  ],
  datasets: [
    {
      // type: "bar",
      //label: "Dataset 1",
      //backgroundColor: "rgb(255, 99, 132)",
      //backgroundColor: "#004d43",
      backgroundColor: [
        "#1D405F",
        "#135974",
        "#047289",
        "#1C8C90",
        "#4BA48D",
        "#76BC89",
        "#9FD287",
        "#CAE985",
        "#f5fcb6",
        "#F2FF83",
      ],
      data: [
        99.48, 46.65, 39.72, 33.3, 28.53, 26.87, 23.88, 13.63, 12.31, 9.87,
      ],
      borderColor: [
        "#1D405F",
        "#135974",
        "#047289",
        "#1C8C90",
        "#4BA48D",
        "#76BC89",
        "#9FD287",
        "#CAE985",
        "#f5fcb6",
        "#F2FF83",
      ],
      borderWidth: 1,
    },
  ],
};

function FoodEmissionBar() {
  return (
    <Container>
      <Bar options={options} data={data} />
    </Container>
  );
}

export default FoodEmissionBar;

const Container = styled.div`
  width: 500px;
`;
