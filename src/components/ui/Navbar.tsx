'use client'

import Container from "@/components/ui/Container";
import { NavLogo, Dots, DownArrow, FingerPrint, Profile } from "@/components/icons/Icons"
import Login from "../auth/Login";
import  Modal from "../modal/Modal";
import Signup from "../auth/Signup";
import { useRef } from "react";

export default function Navbar() {
const ref = useRef<HTMLDivElement>(null); 

  return (
    <nav className="border-b border-[rgba(0,0,0,0.08)] bg-white">
      <Container> 
       <div className="py-[18px] flex justify-between items-center">
        <span className="cursor-pointer">
        <NavLogo/>
        </span>

        <div>
          <ul className="flex justify-between items-center gap-5">
            <li className="flex items-center gap-1 cursor-pointer">Investments 
              <span><DownArrow/></span>
            </li>
            <li className="cursor-pointer">Performance</li>
            <li className="cursor-pointer">Banking</li>
            <li className="flex items-center gap-1 cursor-pointer">About 
            <span><DownArrow/></span>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">Resources 
            <span><DownArrow/></span>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center gap-[10px]">
        <span className="cursor-pointer">
          <Dots/>
        </span>

        <div>
         <Modal ref={ref}>
          <Login/>
         </Modal>
         <button className="flex items-center gap-1 py-1.5 px-[10px] border border-[rgba(0,0,0,0.08)] rounded-full" onClick={() => {ref.current?.classList.add('show-modal');
         ref.current?.classList.remove("out")
         }}
         > 
          <span>
            <FingerPrint/>
          </span>
          Login
         </button>
        </div>

         <button className="flex items-center gap-1 py-1.5 px-[10px] bg-[rgba(88,101,241,1)] rounded-full text-white">
          <span>
            <Profile/>
          </span>
            Signup
         </button>
    
        </div>
       </div>
      </Container>
    </nav>
  )
}