import PropType from "prop-types"

SectionFourContent.propTypes = {
    textContent: PropType.string.isRequired,
    textButton1: PropType.string.isRequired,
    textButton2: PropType.string.isRequired
}

export default function SectionFourContent(props) {

    const { textContent, textButton1, textButton2 } = props;

  return <div className='w-[35%]'>
      <p className="text-[48px] text-white p-[16px] font-bold">{ textContent }</p>
      <button className="mt-[16px] rounded-[10px] py-[16px] px-[24px] text-black bg-white border-none text-[16px] font-bold w-full">{textButton1}</button>
      <button className="mt-[16px] rounded-[10px] py-[16px] px-[24px] text-white bg-transparent border border-white text-[16px] font-bold w-full">{textButton2}</button>
    </div>

}
