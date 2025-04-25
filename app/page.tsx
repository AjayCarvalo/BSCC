import Hero from "@/components/hero";
import News from "@/components/news";
import Upcomingfixtures from "@/components/upcomingfixtures";
import Affiliations from  "@/components/affiliations";
import Videos from "@/components/videos";
import SponsorsSection from "@/components/sponsors";


export default function Home() {
  return (
    <>
    
    <div className="container mx-auto flex items-center justify-between">
    <Hero />
    </div>

    <div>
    <News />
    </div>

    <div>
    <Upcomingfixtures />
    </div>

    <div>
    <Videos />
    </div>

    <div>
    <Affiliations />
    </div>

    <div>
    <SponsorsSection />
    </div>

    
    
    </>


  );
}
