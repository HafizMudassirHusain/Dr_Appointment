
import Card from "@/components/ui/card"

import Hero from "@/components/Hero";
import DoctorChips from "@/components/DoctorChips";

export default function Home() {
  return (
    <div className="container mx-auto px-8">
      
      <Hero />
      <div className="container mx-auto px-5">
        <h1 className="text-4xl font-bold">
          find the Doctor A/c to your Need
        </h1>
        <div >
         
         <DoctorChips isHome={true} />

        </div>

      </div>
    </div>

  );
}
