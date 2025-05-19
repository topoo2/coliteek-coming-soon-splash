
import { useRef, useState, useEffect } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import EmailForm from "@/components/EmailForm";
import SocialLinks from "@/components/SocialLinks";
import { Truck, Package } from "lucide-react";

const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [logoError, setLogoError] = useState(false);

  return (
    <div 
      ref={pageRef} 
      className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 animate-gradient-slow"
      style={{
        backgroundSize: '200% 200%',
        animation: 'gradient 15s ease infinite',
      }}
    >
      <header className="mb-8">
        {logoError ? (
          <div className="w-40 md:w-48 h-16 flex items-center justify-center bg-secondary rounded-lg mb-4">
            <h2 className="text-2xl font-bold text-coliteek-red">Coliteek</h2>
          </div>
        ) : (
          <img 
            src="/lovable-uploads/58fece6e-e278-4d6e-b5c3-5a331a0f0e60.png" 
            alt="Coliteek Logo" 
            className="w-40 md:w-48 h-auto object-contain mx-auto"
            onError={() => setLogoError(true)}
          />
        )}
      </header>

      <main className="flex flex-col items-center max-w-4xl w-full mx-auto text-center gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-coliteek-white">
            Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We're working hard to bring you the best delivery experience. Stay tuned!
          </p>
        </div>

        <CountdownTimer />

        <div className="w-full max-w-md mx-auto mt-4">
          <p className="mb-4 text-gray-300">
            Get notified when we launch:
          </p>
          <EmailForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mt-8">
          <div className="bg-secondary p-6 rounded-lg text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-coliteek-red p-2 rounded-full">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
            </div>
            <p className="text-gray-300">
              Experience lightning fast deliveries with our optimized logistics network and dedicated drivers.
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-lg text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-coliteek-red p-2 rounded-full">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">Secure Handling</h3>
            </div>
            <p className="text-gray-300">
              Your packages are treated with care from pickup to delivery, ensuring they arrive in perfect condition.
            </p>
          </div>
        </div>

        <SocialLinks />
      </main>

      <footer className="mt-16 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Coliteek. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
