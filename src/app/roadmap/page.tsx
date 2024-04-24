import { Check } from "@/components/icons/Icons";

export default function RoadMap() {
  return(
    <>
    <section>
      <div className="flex">
        <div className="left flex justify-center items-center w-1/2 h-screen sticky top-0">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold ">Gray Market Roadmap</h2>
            <p className="text-[rgba(75,77,104,1)]">One strategic step at a time. Forward always.</p>
          </div>
        </div>
        <div className="right w-1/2">
          <div className="flex gap-20 pl-4 w-full h-full">
           <div className="w-px h-full relative bg-[rgba(0,0,0,0.12)]">
            <div className="dot-1 w-8 h-8 rounded-full bg-white flex justify-center items-center absolute left-[-15px] top-[27%] z-[3]">
              <Check/>
            </div>
            <div className="dot w-8 h-8 rounded-full bg-white flex justify-center items-center absolute left-[-15px] top-[49%] z-[3]">
              <Check/>
            </div>
            <div className="dot w-8 h-8 rounded-full bg-white flex justify-center items-center absolute left-[-15px] top-[65%] z-[3]">
              <Check/>
            </div>
            <div className="dot w-8 h-8 rounded-full bg-white flex justify-center items-center absolute left-[-15px] top-[87%] z-[3]">
              <Check/>
            </div>
           </div>
           <div className="flex flex-col gap-28 relative">
            {/* <div className="blur-overlay absolute left-0 top-0 w-full h-1/4 backdrop-blur-sm"></div> */}
            <div className="w-full h-[32vh]"></div>
            <div className="flex flex-col items-start gap-6"> 
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
            <div className="flex flex-col items-start gap-6"> 
              <div className="px-3 py-1 text-[rgba(255,255,255,1)] bg-[rgba(88,101,241,1)] rounded-full">Q4 – 2022</div>  
              <div className="flex flex-col gap-1">
                <h4 className="text-xl text-[rgba(18,18,23,1)]">
                 Gray trading beta launch
                </h4>
                <p className="text-sm text-[rgba(159,161,186,1)]">December 2022</p>
              </div>
            </div>    
            <div className="flex flex-col items-start gap-6"> 
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
            <div className="flex flex-col items-start gap-6"> 
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
    </section>

    <section className="h-screen"></section>
    </>
  )
}
