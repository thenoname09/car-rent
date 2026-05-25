import AvailableCars from "@/components/AvailableCars";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs ";


export default function Home() {
  return (
    <div className="text-6xl text-center">
      <Hero></Hero>
      <WhyChooseUs></WhyChooseUs>
      <AvailableCars></AvailableCars>
      <Testimonials></Testimonials>
    </div>
  );
}
