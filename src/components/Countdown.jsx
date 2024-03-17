import { useEffect, useState } from "react";

export default function FooterNavBar() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(54)
  const [days, setDays] = useState(120)

  const forward = (limit, prev) => {
    if(prev === 0 ) return limit
    return prev - 1
  }

  useEffect(()=>{
    const id = setInterval(()=>{
      if( seconds===0 && minutes===0 && hours===0 && days===0) return clearInterval(id)
      const newSeconds = forward(59, seconds)
      setSeconds(newSeconds)
      if(newSeconds === 59) {
        const newMinutes = forward(59, minutes)
        setMinutes(newMinutes)
        if(newMinutes === 59) {
          const newHours = forward(23, hours)
          setHours(newHours)
          if(newHours === 23) {
            setDays(prev => prev - 1)
          }
        }
      }
    },1000)
    return () => clearInterval(id)
  },[days, hours, minutes, seconds])

  return <div className="pl-[26px] flex flex-row justify-around w-full gap-2">
      { [
          {label:'Days', value:days},
          {label:'hours', value:hours},
          {label:'minutes', value:minutes},
          {label:'seconds', value:seconds}
        ].map((time, index) => <div className="text-color-back font-bold flex flex-col justify-center items-center" key={index}>
            <span className="text-[26px]">{ time.value }</span>
            <span className="text-[#3FFA53]">{ time.label }</span>
        </div>)}
    </div>
}