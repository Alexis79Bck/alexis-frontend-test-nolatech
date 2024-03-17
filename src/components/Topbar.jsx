import PropsType from 'prop-types'

Topbar.propTypes = {
    liveText: PropsType.string,
    contentText: PropsType.string,
    joinText: PropsType.string
}


export default function Topbar(props) {

    const {liveText, contentText, joinText} = props
    return <header className="flex justify-center h-[40px] bg-[#008000] flex-row items-center">
        <span className="h-full flex justify-center items-center px-[12px] bg-[#f00] uppercase text-color-back ml-[16px] font-bold text-[20px] text-center">
            {liveText}
            <i className='m-2 fas fa-satellite-dish'></i>
        </span>

        <span className="ml-[16px] text-color-back font-bold text-[20px] text-center">
            {contentText}
        </span>

        <span className="px-[12px] h-full flex justify-center items-center hover:bg-[#3ffa53] cursor-pointer ml-[16px] text-color-back font-bold text-[20px] text-center">
            {joinText}
            <i className='m-2 fas fa-circle-play'></i>
        </span>

    </header>
}
