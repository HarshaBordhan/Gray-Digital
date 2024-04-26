import Container from "@/components/ui/Container"
import { Resume } from "@/components/icons/Icons"
import Image from 'next/image'

export default function SectionOne() {
  return(
    <section>
      <Container>
      <div className="flex justify-between items-center pt-16 h-[90vh]">
        <div className="left flex flex-col justify-between items-start gap-6">
         <button className="flex items-center gap-1 pl-2.5 pr-[14px] py-1 border border-[rgba(50,66,238,1)] rounded-full text-[rgba(75,77,104,1)]">
          <span><Resume/></span>
          Products overview
         </button>

          <h2 className="text-5xl text-[rgba(18,18,23,1)] font-bold">Investing, redefined</h2>

          <p className="text-base text-[rgba(75,77,104,1)]">Institutional quality investments and services, for everyone</p>

          <button className="px-6 py-2 rounded-full bg-[rgba(88,101,241,1)] text-white text-lg font-semibold">Join now</button>
        </div>
        <div className="right">
         <Image src="/GLOBE_1_.png" alt="globe" className="w-auto h-auto" width={620} height={530} priority />
        </div>
      </div>
      </Container>
    </section>
  )
}