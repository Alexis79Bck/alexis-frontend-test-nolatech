import PropsType from 'prop-types'
import BackgroundImage from "../components/NavBackgroundImage";
import HeaderNavBar from "../components/HeaderNavBar";

NavBar.propTypes = {
  logoImage: PropsType.string.isRequired,
  navbarBackgroundImage: PropsType.string.isRequired
};

import FooterNavBar from "./FooterNavBar";

export default function NavBar(props) {
  const { logoImage, navbarBackgroundImage } = props;
  return <nav>
    <BackgroundImage src={navbarBackgroundImage} className="-z-1 w-full object-cover max-h-[600px] absolute" />
    <div className="absolute top-[45px] w-full">
        <HeaderNavBar brandLogo={logoImage} />
        <FooterNavBar />
    </div>
  </nav>

}
