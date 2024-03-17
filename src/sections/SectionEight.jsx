import Slider from "react-slick";
import Pic10 from "../assets/Pic10.png";
import Pic7 from "../assets/Pic7.png";
import Pic8 from "../assets/Pic8.png";
import Pic9 from "../assets/Pic9.png";

export default function SectionEight() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 3,
        autoplay: false,
        appendDots: (dots) => {
            const items = dots.map( item => ({
                key: parseInt(item.key) + 1,
                active: item.props.className.includes("slick-active"),
                onClick: item.props.children.props.onClick
            }) )
            return <ul className="flex justify-center mx-10">
                {items.map( item => <li key={item.key} className="mx-2" onClick={item.onClick}><span className={`block w-4 h-4 border-2 border-white rounded-full mt-2 ` + (item.active?'bg-white':'')}></span></li> )}
            </ul>
        }
    }

    const items = [ Pic7, Pic8, Pic9, Pic7, Pic8, Pic9, Pic10 ]

    return <section className="py-20 flex flex-col gap-2 bg-green-600 ">
        <h1 className="text-center text-7xl font-bold mb-20 text-white">Lorem ipsum dolor sit amet</h1>
        <div className="pl-10 w-full">
            <Slider {...settings}>
                { items.map( (item, index) => <div key={`video-${index}`} className="">
                    <img src={item} alt="placeholder" className="mx-auto" />
                </div>
                )}
            </Slider>
        </div>
        <button className="mx-auto mt-10 bg-white text-black text-xl py-4 px-12 rounded border font-bold uppercase">view all</button>
    </section>
}