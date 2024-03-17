import Topbar from "../components/Topbar";
import NavBar from "../components/NavBar"; 

export default function SectionOne() {
  return <>
      <Topbar
        liveText="LIVE"
        contentText="Lorem ipsum dolor sit amet"
        joinText="JOIN NOW"
      />
      <NavBar
        logoImage="../assets/icongrab.png"
        navbarBackgroundImage="../assets/Prb_Header.png"
      />
  </>
}
