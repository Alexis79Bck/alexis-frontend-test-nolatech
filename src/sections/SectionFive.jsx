
const videos = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        url: "assets/Pic1.png"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        url: "assets/Pic1.png"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        url: "assets/Pic1.png"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        url: "assets/Pic1.png"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        url: "assets/Pic1.png"
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur",
        url: "assets/Pic1.png"
    }

]

export default function SectionFive() {

    return <section className="mx-10 py-20 flex flex-col gap-2 bg-white ">
        <h1 className="text-center text-7xl font-bold mb-5">Latest videos</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-7 w-full">
            { videos.map( (video, index) => <div key={`video-${index}`} className="flex flex-col justify-center items-center">
                <a href={video.url} target="_blank">
                    <img src={video.url} alt="placeholder" className="justify-center object-cover max-w-[250px]" />
                </a>
                <h3 className="text-lg text-center py-4">{ video.title }</h3>
            </div>)}
        </div>
        <button className="mx-auto mt-10 bg-green-700 text-white text-xl py-4 px-12 rounded border font-bold uppercase">view all</button>
    </section>

}