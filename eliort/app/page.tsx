
import FistPart from "./_home/fistPart";
import SecondPart from "./_home/secondPart";
import ThirdPart from "./_home/thirdPart";
import UseCaseCard from "./_home/UseCases";
import Testimony from "./_home/Testimony";

import PartnerLogoMarquee from "./_home/Trust";
import Services from "./_home/Services";
import Footer from "./_home/Footer";

import FourthPart from "./_home/fourthPart";
import FinalVue from "./_home/FinalVue";

export default function Home() {
  return (
   <>
     <FistPart/>
     <SecondPart/>
     <ThirdPart/>
     <FourthPart/>
     <FinalVue/>
     <UseCaseCard/>
     <Testimony/>
     < PartnerLogoMarquee/>
     <Services/>
     {/* <EtVous/> */}
     <Footer/>
   </>
  );
}
