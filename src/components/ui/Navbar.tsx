'use client'

import Container from "@/components/ui/Container";
import { NavLogo, Dots, DownArrow, FingerPrint, Profile } from "@/components/icons/Icons"
import Login from "../auth/Login";
import  Modal from "../modal/Modal";
import Signup from "../auth/Signup";
import { useEffect, useRef } from "react";

export default function Navbar() {
const ref = useRef<HTMLDivElement>(null); 

useEffect(() => {
let lastScrollPosition = 0;
const nav = document.querySelector('nav') as HTMLElement;

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition > lastScrollPosition) {
      nav.style.transform = 'translateY(-10vh)';
    } else {
      nav.style.transform = 'translateY(0vh)';
    }

    lastScrollPosition = scrollPosition;
  }

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  } 
}, [])

return (
    <nav className="border-b border-[rgba(0,0,0,0.08)] bg-white fixed top-0 left-0 right-0 h-[10vh] z-[100] transition-all duration-200">
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