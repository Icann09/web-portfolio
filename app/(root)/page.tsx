import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import MyLatestWork from "@/components/MyLatestWork";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Hero() {
  return (
    <div>
      <Home />
      <AboutMe />
      <Services />
      <MyLatestWork />
      <Testimonials />
      <Footer />
    </div>
  );
}
