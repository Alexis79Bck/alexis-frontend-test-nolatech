import PropTypes from "prop-types";

FormSubtitleText.propTypes = {
  subtitle: PropTypes.string,
}

export default function FormSubtitleText(props) {
    const { subtitle } = props;

  return (
    <h1 className="text-white text-[16px] font-bold m-[2%]">{subtitle}</h1>
  )
}