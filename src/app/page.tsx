import Marquee from '@/components/sections/Marquee';
import SectionOne from '@/components/sections/SectionOne';
import Navbar from '@/components/ui/Navbar';
import RoadMap from '@/components/sections/Roadmap';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className='w-full'>
      <SectionOne/>
      <Marquee/>
      </div>
      <RoadMap/>
      <section className='h-screen bg-gray-400'></section>
    </main>  
  );
}
