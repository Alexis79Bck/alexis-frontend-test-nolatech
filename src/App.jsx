import SocialSticky from "./components/SocialSticky";
import SectionOne from "./sections/SectionOne";
import SectionTwo from "./sections/SectionTwo";
import SectionThree from "./sections/SectionThree";
import SectionFour from "./sections/SectionFour";
import SectionFive from "./sections/SectionFive";
import SectionSix from "./sections/SectionSix";
import SectionSeven from "./sections/SectionSeven";
import SectionEight from "./sections/SectionEight";
import FooterSection from "./sections/FooterSection";


export default function App() {
  return <>
      <SocialSticky />
      <SectionOne />
      <main className="">
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
      </main>
      <FooterSection />
    </>
}
