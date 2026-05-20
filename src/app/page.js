import AvailableCars from "@/components/AvailableCars";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="text-6xl text-center">
      <Hero></Hero>
      <AvailableCars></AvailableCars>
    </div>
  );
}
