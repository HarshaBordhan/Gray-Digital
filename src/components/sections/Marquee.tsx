import ReactMarquee from 'react-fast-marquee';
import Container from '@/components/ui/Container';
import Image from '@/components/images/Image';

export default function Marquee() {
  return(
    <section>
      <Container>
        <div className='py-16 border-t border-[rgba(0,0,0,0.08)]'>
          <ReactMarquee> 
           <Image src="/Testing/logo wrapper.png" alt="marquee" className='mr-8 w-auto h-auto' width={100} height={32}/>
           <Image src="/Testing/logo wrapper-1.png" alt="marquee" className='mr-8 w-auto h-auto' width={138} height={32}/>
           <Image src="/Testing/logo wrapper-2.png" alt="marquee" className='mr-8 w-auto h-auto' width={127} height={32}/>
           <Image src="/Testing/logo wrapper-3.png" alt="marquee" className='mr-8 w-auto h-auto' width={150} height={32}/>
           <Image src="/Testing/logo wrapper-4.png" alt="marquee" className='mr-8 w-auto h-auto' width={58} height={32}/>
           <Image src="/Testing/logo wrapper-5.png" alt="marquee" className='mr-8 w-auto h-auto' width={58} height={32}/>
           <Image src="/Testing/logo wrapper-6.png" alt="marquee" className='mr-8 w-auto h-auto' width={148} height={32}/>
           <Image src="/Testing/logo wrapper-7.png" alt="marquee" className='mr-8 w-auto h-auto' width={45} height={32}/>
           <Image src="/Testing/logo wrapper-8.png" alt="marquee" className='mr-8 w-auto h-auto' width={122} height={32}/>
           <Image src="/Testing/logo wrapper-9.png" alt="marquee" className='mr-8 w-auto h-auto' width={118} height={32}/>
          </ReactMarquee>
        </div>
      </Container>
    </section>
  )
}