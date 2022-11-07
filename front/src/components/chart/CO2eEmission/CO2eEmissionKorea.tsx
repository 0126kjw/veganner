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
import koreaData from "../../../assets/data-analysis/json/1990-2019_Korea.json";

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
      display: false,
    },
    title: {
      display: true,
      text: "1990-2020년도 우리나라 온실가스 배출량",
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
      },
      title: {
        display: true,
        text: "단위: 100만톤(Mt)",
      },
    },
  },
};

const yearArr = Object.keys(koreaData).map((item) => Number(item) + 1990);

const data = {
  // 1990 - 2019년
  labels: yearArr,
  datasets: [
    {
      label: "Korea",
      backgroundColor: "#0067a3",
      data: Object.values(koreaData),
      borderColor: "#0067a3",
      //borderWidth: 1,
    },
  ],
};

function CO2eEmissionKorea() {
  return (
    <Container>
      <Line options={options} data={data} />
    </Container>
  );
}

export default CO2eEmissionKorea;

const Container = styled.div`
  width: 750px;
`;
