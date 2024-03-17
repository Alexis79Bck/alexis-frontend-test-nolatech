import PropTypes from "prop-types";

FormTitleText.propTypes = {
  title: PropTypes.string,
}

export default function FormTitleText(props) {
    const { title } = props

  return (
    <h1 className="text-white text-[56px] font-bold m-[2%]">{title}</h1>
  )
}
