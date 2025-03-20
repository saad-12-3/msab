
import Footer from "@/pages/home/footer";
import FaqSection from "@/pages/home/FaqSection";
import Hero from "@/pages/home/hero";
import LatestBlog from "@/pages/home/LatestBlog";
import Services from "@/pages/home/services";


export default function Home() {
  return (
    <div >
      <Hero></Hero>
      <Services></Services>
      <Footer></Footer>
      <Hero/>
      <Services/>
      <FaqSection/>
      <LatestBlog/>
    </div>
  );
}
