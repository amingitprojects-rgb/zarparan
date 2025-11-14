import Slider from "../components/Slider";
import BestSellers from "@/components/BestSellers";
import PricesTable from "@/components/PricesTable";

function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <main>
        {/* SLIDER */}
        <Slider />

        {/* PRICE */}
        <PricesTable />

        {/* BEST SELLERS */}
        <BestSellers />
      </main>
    </div>
  );
}

export default Home;
