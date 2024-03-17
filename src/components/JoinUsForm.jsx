import FormTitleText from './FormTitleText'
import FormSubtitleText from './FormSubtitleText'
import FormBody from './FormBody'

export default function JoinUsForm() {
  return (
    <div className="flex flex-col w-1/2 gap-[5%]">
        <FormTitleText title="JOIN US" />
        <FormSubtitleText subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing" />
        <FormBody />
    </div>
  )
}
