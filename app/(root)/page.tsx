import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import MyLatestWork from "@/components/MyLatestWork";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import GetConnect from "@/components/GetConnect";



export default function Hero() {
  return (
    <div>
      <Home />
      <AboutMe />
      <Services />
      <MyLatestWork />
      <GetConnect />
      <Footer />
    </div>
  );
}
