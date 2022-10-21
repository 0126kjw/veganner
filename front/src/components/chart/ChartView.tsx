import FoodEmissionBar from "./foodEmission/FoodEmissionBar";
import FoodEmissionToCarBar from "./foodEmission/FoodEmissionToCarBar";
import CO2eEmissionWorld from "./CO2eEmission/CO2eEmissionWorld";
import CO2eEmissionKorea from "./CO2eEmission/CO2eEmissionKorea";
import WorldMeatConsumption from "./meatConsumption/WorldMeatConsumption";
import WorldPersonMeatConsumption from "./meatConsumption/WorldPersonMeatConsumption";
import KoreaMeatConsumption from "./meatConsumption/KoreaMeatConsumption";
import KoreaPersonMeatConsumption from "./meatConsumption/KoreaPersonMeatConsumption";
import TotalLivestockEmission from "./livestockEmission/TotalLivestockEmission";
import CowLivestockEmission from "./livestockEmission/CowLivestockEmission";
import PigLivestockEmission from "./livestockEmission/PigLivestockEmission";
import ChickenLivestockEmission from "./livestockEmission/ChickenLivestockEmission";
import SheepLivestockEmission from "./livestockEmission/SheepLivestockEmission";
function ChartView() {
  return (
    <>
      <FoodEmissionBar />
      <FoodEmissionToCarBar />
      <CO2eEmissionWorld />
      <CO2eEmissionKorea />
      <WorldMeatConsumption />
      <WorldPersonMeatConsumption />
      <KoreaMeatConsumption />
      <KoreaPersonMeatConsumption />
      <TotalLivestockEmission />
      <CowLivestockEmission />
      <PigLivestockEmission />
      <ChickenLivestockEmission />
      <SheepLivestockEmission />
    </>
  );
}

export default ChartView;
