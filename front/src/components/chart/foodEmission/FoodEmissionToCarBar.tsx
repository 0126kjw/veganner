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
      text: "육류별 자동차 주행거리",
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
        text: "주행 거리(km)",
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
  labels: ["Poultry Meat", "Pig Meat", "Lamb & Mutton", "Beef(beef herd)"],
  datasets: [
    {
      // type: "bar",
      //label: "Dataset 1",
      //backgroundColor: "rgb(255, 99, 132)",
      //backgroundColor: "#004d43",
      backgroundColor: ["#9FD287", "#4BA48D", "#047289", "#1D405F"],
      data: [101.75, 126.91, 409.48, 1025.57],
      borderColor: ["#9FD287", "#4BA48D", "#047289", "#1D405F"],
      borderWidth: 1,
    },
  ],
};

function FoodEmissionToCarBar() {
  return (
    <Container>
      <Bar options={options} data={data} />
    </Container>
  );
}

export default FoodEmissionToCarBar;

const Container = styled.div`
  width: 500px;
`;
