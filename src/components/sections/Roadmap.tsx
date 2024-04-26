'use client'

import { useState } from "react";

import { Check, Pending } from "@/components/icons/Icons";
import { useEffect } from "react";
import Container from "../ui/Container";

export default function RoadMap() {
const [progress, setProgress] = useState<number | null>(0);

useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const timeline = document.querySelector('.scrollEl') as HTMLElement;
      const timelineTop = timeline.getBoundingClientRect().top;

      const timelineLine = document.querySelector('.line-fill') as HTMLElement;

      if (timelineTop < windowHeight && timelineTop > -timeline.offsetHeight) {
        const timelineHeight = timeline.offsetHeight;
        const newProgress = ((windowHeight + scrollPosition - timelineTop) / (timelineHeight + windowHeight)) * 100 - 44;
        
         if (newProgress >= 0 && newProgress <= 100) {
          setProgress(newProgress);
          timelineLine.style.height = `${newProgress}%`;
        }
      }

      const contentSections = document.querySelectorAll('.content') as NodeListOf<Element>;
  
      contentSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < timeline.offsetHeight * 0.16) {
      section.classList.add('blur-transition');
      } else {
      section.classList.remove('blur-transition');
      }
      });

      console.log("The event is firing")
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dotClass = (percentage: any) => {
    return progress !== null && progress >= percentage ? 'dot-fill' : '';
  };

  console.log(progress)

  return(
    <>
    <section className="py-16">
      <Container> 
      <div className="flex">
        <div className="left w-1/2 flex justify-start items-center h-screen sticky top-0">
            {/* <div className="flex flex-col gap-4 pt-[56%] sticky top-0"> */}
            <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold ">Gray Market Roadmap</h2>
            <p className="text-[rgba(75,77,104,1)]">One strategic step at a time. Forward always.</p>
            </div>
        </div>

        <div className="right w-1/2 flex flex-col">
          <div className="w-full">
          <div className="scrollEl flex gap-20 pl-4 w-full h-full relative">
         
          <div className="w-px h-full bg-[rgba(0,0,0,0.12)]">
            <div className={`dot w-8 h-8 rounded-full bg-white flex justify-center items-center absolute left-0 top-[27%] z-[3] ${dotClass(27)}`}>
              <Check/>
            </div>
            <div className={`dot w-8 h-8 rounded-full bg-white flex justify-center items-center absolute left-0 top-[48.8%] z-[3] ${dotClass(48.8)}`}>
              <Check/>
            </div>
            <div className={`dot w-8 h-8 rounded-full bg-white flex justify-center items-center absolute left-0 top-[64.8%] z-[3] ${dotClass(64.8)}`}>
              <Check/>
            </div>
            <div className={`dot w-8 h-8 rounded-full bg-white flex justify-center items-center absolute left-0 top-[86.7%] z-[3] ${dotClass(86.7)}`}>
              <Check/>
            </div>
            <div className={`dot w-8 h-8 rounded-full bg-white flex justify-center items-center absolute left-0 bottom-0 z-[5] ${dotClass(98)}`}>
              <Pending />
            </div>
            <div className="line-fill w-full bg-[rgba(88,101,241,1)]" style={{ height: `${progress}%`}}></div>
            {/* <div className="line-fill-2 absolute inset-0 w-full bg-[rgba(88,101,241,1)]"></div> */}
           </div>     

           <div className="dots">
           </div>

           <div className="relative flex flex-col gap-28 h-full">
            <div className="w-full h-[32vh]"></div>
            <div className="flex flex-col gap-28">
             <div className="content flex flex-col items-start gap-6"> 
              <div className="px-3 py-1 text-[rgba(255,255,255,1)] bg-[rgba(88,101,241,1)] rounded-full">Q2 – 2022</div>  
              <div className="flex flex-col gap-1">
                <h4 className="text-xl text-[rgba(18,18,23,1)]">
                 Gray fund beta launch
                </h4>
                <p className="text-sm text-[rgba(159,161,186,1)]">June 2022</p>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl text-[rgba(18,18,23,1)]">
                  Gray market launch
                </h4>
                <p className="text-sm text-[rgba(159,161,186,1)]">March 2022</p>
              </div>
            </div>    
            <div className="content flex flex-col items-start gap-6"> 
              <div className="px-3 py-1 text-[rgba(255,255,255,1)] bg-[rgba(88,101,241,1)] rounded-full">Q4 – 2022</div>  
              <div className="flex flex-col gap-1">
                <h4 className="text-xl text-[rgba(18,18,23,1)]">
                 Gray trading beta launch
                </h4>
                <p className="text-sm text-[rgba(159,161,186,1)]">December 2022</p>
              </div>
            </div>    
            <div className="content flex flex-col items-start gap-6"> 
              <div className="px-3 py-1 text-[rgba(255,255,255,1)] bg-[rgba(88,101,241,1)] rounded-full">Q2 – 2023</div>  
              <div className="flex flex-col gap-1">
                <h4 className="text-xl text-[rgba(18,18,23,1)]">
                New website UI
                </h4>
                <p className="text-sm text-[rgba(159,161,186,1)]">May 2023</p>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl text-[rgba(18,18,23,1)]">
                Gray fund public launch
                </h4>
                <p className="text-sm text-[rgba(159,161,186,1)]">May 2023</p>
              </div>
            </div>    
            <div className="content flex flex-col items-start gap-6"> 
              <div className="px-3 py-1 text-[rgba(255,255,255,1)] bg-[rgba(88,101,241,1)] rounded-full">Q3 – 2023</div>  
              <div className="flex flex-col gap-1">
                <h4 className="text-xl text-[rgba(18,18,23,1)]">
                 Gray market news
                </h4>
                <p className="text-sm text-[rgba(159,161,186,1)]">July 2023</p>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl text-[rgba(18,18,23,1)]">
                  Certik Audit
                </h4>
                <p className="text-sm text-[rgba(159,161,186,1)]">May 2023</p>
              </div>
            </div>  
            </div>
           </div>        
          </div>
          </div>
          <div className="h-[44vh]"></div>
        </div>
      </div>
      </Container>
    </section>

    {/* <section className="h-screen">
    </section> */}
    </>
  )
}