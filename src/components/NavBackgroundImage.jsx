import PropTypes  from 'prop-types';

NavBackgroundImage.propTypes = {
  src: PropTypes.string.isRequired
}

export default function NavBackgroundImage(props) {

  const { src } = props;
  return <img src={src} alt="prb_header" className="-z-1 w-full object-cover max-h-[600px] absolute"/>

}
