import styled from "styled-components";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: true,
  },
  plugins: {
    legend: {
      position: "bottom" as const,
      //display: false,
    },
    title: {
      display: true,
      text: "축산업에서 온실가스 배출 비율 - 돼지",
      font: {
        size: 14,
      },
    },
  },
};

const data = {
  labels: ["CH4", "CO2", "N2O"],
  datasets: [
    {
      backgroundColor: ["#1f9b80", "#c8e341", "#10506b"],
      data: [5086.35, 7477.15, 3822.79],
      //borderColor: ["#19856D", "#B6CF3B", "#0D4055"],
      borderWidth: 1,
    },
  ],
};
function PigLivestockEmission() {
  return (
    <Container>
      <Doughnut options={options} data={data} />
    </Container>
  );
}

export default PigLivestockEmission;

const Container = styled.div`
  width: 400px;
`;
