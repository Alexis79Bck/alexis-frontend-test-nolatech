import PropTypes from "prop-types"
import BodyNavBar from "./BodyNavBar"

HeaderNavBar.propTypes = {
  brandLogo: PropTypes.string.isRequired,
}


export default function HeaderNavBar(props) {

  const { brandLogo } = props;
  return <div className="flex flex-row justify-evenly">
        <img src={brandLogo} alt="grab" className="z-10 object-contain max-w-[180px] max-h-[120px]" />
        <div className="flex flex-col">
            <div className="flex h-[120px] flex-row justify-around items-center">
                <a href="" className="hover:underline ml-[16px] text-color-back font-bold text-[16px] no-underline">LOREM IPSUM</a>
                <a href="" className="hover:underline ml-[16px] text-color-back font-bold text-[16px] no-underline">LOREM IPSUM</a>
                <a href="" className="hover:underline ml-[16px] text-color-back font-bold text-[16px] no-underline">LOREM IPSUM</a>
                <a href="" className="hover:underline ml-[16px] text-color-back font-bold text-[16px] no-underline">LOREM IPSUM</a>
                <a href="" className="hover:underline ml-[16px] text-color-back font-bold text-[16px] no-underline">LOREM IPSUM</a>
                <a href="" className="hover:underline ml-[16px] text-color-back font-bold text-[16px] no-underline">LOREM IPSUM</a>
            </div>
            <div className="ml-[16px]">
                <BodyNavBar />
            </div>
        </div>
    </div>
}
