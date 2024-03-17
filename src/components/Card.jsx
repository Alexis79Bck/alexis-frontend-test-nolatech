import PropTypes from 'prop-types'

Card.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired

}

export default function Card(props) {
    const {src, title} = props;

    return src &&<div>
        <img src={src} {...props}/>
        <h2 className="bg-green-600 text-white text-center text-2xl py-6 uppercase font-bold">{title}</h2>
    </div>
}