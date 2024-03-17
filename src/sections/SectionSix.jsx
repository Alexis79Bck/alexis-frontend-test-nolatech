import JoinUsForm from "../components/JoinUsForm";


export default function SectionSix() {
  return (
    <section className="mt-[5%] flex flex-row justify-end h-full">
         <img src="../assets/Join_Us.png" className="absolute w-full object-fill max-h-[800px] -z-10" alt="background-pic" />
        <JoinUsForm />
    </section>
  )
}
