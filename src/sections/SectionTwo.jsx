import pic1 from "../assets/Pic1.png";

export default function SectionTwo() {

    return <section className="mt-[5%] flex flex-row justify-center w-full">
        <div className="w-1/2 mx-20 my-5">
            <h1 className="text-7xl font-bold">Lorem ipsum dolor sit amet</h1>
            <p className="mt-10 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem temporibus odit, dolores nemo vel maiores voluptatum ab nisi rerum delectus fugit amet dolorum quaerat corporis accusantium consequatur, minus nostrum maxime.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem temporibus odit, dolores nemo vel maiores voluptatum ab nisi rerum delectus fugit amet dolorum quaerat corporis accusantium consequatur, minus nostrum maxime.
            </p>
        </div>
        <div className="w-1/2">
            <img src={pic1} className="" alt="placeholder" />
        </div>

    </section>
}