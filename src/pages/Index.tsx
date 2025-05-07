
import { useEffect } from "react";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <FeaturedProducts />
          {/* <CategorySection /> */}
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
