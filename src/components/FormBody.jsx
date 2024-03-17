export default function FormBody() {
  return (
    <>
        <div className="flex flex-row">
            <input type="text" className="border-none rounded-[10px] m-[2%] h-[45px] pl-[16px] w-full" placeholder="Name" />
            <input type="text" className="border-none rounded-[10px] m-[2%] h-[45px] pl-[16px] w-full" placeholder="Username" />
        </div>
        <div className="flex flex-row">
            <input type="text" className="border-none rounded-[10px] m-[2%] h-[45px] pl-[16px]   w-full" placeholder="Phone" />
            <input type="email" className="border-none rounded-[10px] m-[2%] h-[45px] pl-[16px]  w-full" placeholder="Email" />
        </div>
        <div className="flex flex-row">
            <input type="text" className="border-none rounded-[10px] m-[2%] h-[45px] pl-[16px]  w-full" placeholder="Department" />
        </div>
        <div className="flex flex-row">
            <textarea className="border-none rounded-[10px] m-[2%] pl-[16px] w-full pt-[16px] h-[120px]" placeholder="Mensajes" />
        </div>
        <div className="flex flex-row">
            <button className="p-[16px] border-none text-white bg-[#008000] rounded-[10px] text-[24px] px-[46px] font-bold object-content m-[2%] max-w-fit">{"I'M IN"}</button>
        </div>
        <div className="flex flex-row">
            <p className="text-[16px] text-white font-bold text-center mt-[2%] ml-[2%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio praesentium, culpa perspiciatis magnam nemo architecto, ut vel laudantium laborum nobis id omnis recusandae rerum odio iure repudiandae placeat. Dolorum, nisi!
            </p>
        </div>
    </>
  )
}
