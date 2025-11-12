import Prices from "@/components/Prices";
import Slider from "../components/Slider";
import BestSellers from "@/components/BestSellers";

function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <main>
        {/* SLIDER */}
        <Slider />

        {/* PRICE */}
        <Prices />

        {/* BEST SELLERS */}
        <BestSellers />
      </main>
    </div>
  );
}

export default Home;
