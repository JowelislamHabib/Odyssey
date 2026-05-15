import AdditionalService from "./Components/AdditionalService";
import Banner from "./Components/Banner";
import Featured from "./Components/Featured";
import Testimonial from "./Components/Testimonial";

export default function Home() {
  return (
    <>
      <Banner />
      <Featured />
      <Testimonial />
      <AdditionalService />
    </>
  );
}
