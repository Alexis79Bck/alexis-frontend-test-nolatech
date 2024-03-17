import Card from "../components/Card";

import Pic2 from "../assets/Pic2.png";
import Pic3 from "../assets/Pic3.png";
import Pic4 from "../assets/Pic4.png";


export default function SectionThree() {

    return <section className="py-20 flex flex-col gap-2 bg-white-200">
        <h1 className="text-center text-7xl font-bold mb-5">Lorem ipsum</h1>
        <p className="mx-40 mb-10 text-center text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolores eius atque quas, accusantium nobis dolorum minima voluptates, possimus asperiores enim animi optio eaque molestias aliquid molestiae consequuntur placeat ipsam?</p>
        <div className="grid grid-cols-3 gap-7 border w-full">
            <Card src={Pic2} title="Lorem ipsum" />
            <Card src={Pic3} title="Lorem ipsum" />
            <Card src={Pic4} title="Lorem ipsum" />
        </div>
        <button className="mx-auto mt-10 bg-white text-black text-2xl py-5 px-12 rounded-lg border border-black font-bold uppercase">Learn more</button>
    </section>
}