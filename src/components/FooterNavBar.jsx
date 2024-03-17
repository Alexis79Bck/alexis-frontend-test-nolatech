import Countdown from "./Countdown";

export default function FooterNavBar() {
  return (
    <div className="flex flex-row mt-[5.5%] h-[75px] bg-[#008000] w-full">
      <div className="flex justify-center items-center text-[24px] text-color-back font-bold pl-[25px] ">
        <p className="">Lorem ipsum dolor sit amet, consetetur</p>
      </div>
      <div className="pl-[26px] flex flex-row justify-between w-[60%]">
        <Countdown days={170} hours={13} minutes={40} seconds={17} />
      </div>
    </div>
  );
}
