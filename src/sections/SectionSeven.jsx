import pic6 from "../assets/Pic6.png";

export default function SectionSeven() {

    return <section className="flex flex-row h-full min-h-[600px]">
        <img src={pic6} className="absolute w-full object-fill max-h-[600px] -z-10" alt="background-pic" />
        <div className="w-1/2 m-32">
            <h1 className="text-4xl font-bold">Lorem  ipsum dolor sit</h1>
            <p className="mt-10 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem temporibus odit, dolores nemo vel maiores voluptatum ab nisi rerum delectus fugit amet dolorum quaerat corporis accusantium consequatur, minus nostrum maxime.
            </p>
            <button className="mx-auto mt-10 bg-green-700 text-white text-xl py-4 px-12 rounded border font-bold uppercase">view all</button>
        </div>
        <div className="w-1/2">
            
        </div>

    </section>
}