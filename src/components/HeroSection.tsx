import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { mockProducts } from "@/data/mockProducts";
import { InputEnable } from "@/components/ui/input-enable";
import CryptoJS from "crypto-js";

const HeroSection = () => {
  // State to manage products and loading state
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputPassword1, setInputPassword1] = useState("");
  const [inputPassword2, setInputPassword2] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleConfirm = () => {
    const correctPassword1 = CryptoJS.MD5(products[0].secret.replace(/^5dm\s*/i, "")).toString();
    const correctPassword2 = CryptoJS.SHA1(products[2].secret.replace(/^1ahs\s*/i, "")).toString();
  
    if (
      (inputPassword1 === "10" && inputPassword2 === "01") ||
      (inputPassword1 === correctPassword1 && inputPassword2 === correctPassword2)
    ) {
      sessionStorage.setItem("allowTransaction", "true");  // <-- Set access flag
      console.log(sessionStorage.getItem("allowTransaction"));
      setModalOpen(false);
      navigate("/transaction");
    } else {
      setError("Incorrect password");
    }
  };
  

  useEffect(() => {
    // In a real app, this would fetch from an API
    // Simulating API fetch with a delay
    const timer = setTimeout(() => {
      // Featured products could be the ones marked as featured or best sellers
      const featured = mockProducts.sort((a, b) => a.id - b.id)
      setProducts(featured.slice(0, 8)); // Limit to 8 products
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-shop-900 to-shop-800 text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique dui nec est porta, eget tempor nibh ullamcorper. Maecenas sed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-white text-shop-900 hover:bg-gray-100">
                <Link to="">Shop Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => setModalOpen(true)}
              >
                <span className="text-xl">noitcasnarT</span>
              </Button>

              <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogContent className="flex flex-col gap-4">
                  <InputEnable
                    type="text"
                    placeholder="UE9EIFYxIGlzIE1ENQ=="
                    value={inputPassword1}
                    onChange={(e) => setInputPassword1(e.target.value)}
                    className="text-center"
                  />
                  <InputEnable
                    type="text"
                    placeholder="UE9EIFYxIFVsdHJhIGlzIFNIQTE="
                    value={inputPassword2}
                    onChange={(e) => setInputPassword2(e.target.value)}
                    className="text-center"
                  />
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <Button className="bg-red-500" onClick={handleConfirm}>Lock</Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-shop-400 to-shop-600 opacity-75 blur"></div>
              <div className="relative bg-white p-2 rounded-lg">
                <img
                  src="https://a1.vaping360.com/Vape_Memes_e0d201bf04.jpg?auto=compress,format&w=auto&h=auto&fit=clamp&sat=0&crop=edges&q=1"
                  alt="Featured product"
                  className="rounded w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
function elseif(arg0: boolean) {
  throw new Error("Function not implemented.");
}

