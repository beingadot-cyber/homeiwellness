import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { MantraMarquee, Stats } from "./components/Herald";
import About from "./components/About";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Contact, { CtaBanner } from "./components/Contact";
import Footer from "./components/Footer";
import Floating from "./components/Floating";

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <MantraMarquee />
      <Stats />
      <About />
      <Products />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
      <Contact />
      <Footer />
      <Floating />
    </main>
  );
}
