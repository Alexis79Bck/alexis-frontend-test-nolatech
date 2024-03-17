import SectionFourContent from "../components/SectionFourContent";
import srcImage from "../assets/Pic5.png"

export default function SectionFour() {

    return (
        <section className="mt-[5%] flex flex-row w-full bg-[#008000] justify-center max-h-[480px]">
            <SectionFourContent textContent="Lorem, ipsum dolor sit amet consectetur" textButton1="Lorem, ipsum dolor sit amet consectetur" textButton2="Lorem, ipsum dolor sit amet consectetur" />
            <img src={srcImage} className="object-fill w-[35%]" />
        </section>
    )
}