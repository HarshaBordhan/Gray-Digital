'use client'

import { Close } from "../icons/Icons";
import { Ref, forwardRef, useEffect } from "react";
import React from "react";

type ModalProps = {
  children: React.ReactNode;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
function Modal({children}, ref: Ref<HTMLDivElement>) {


  useEffect(() => {
    const modalWrapper = document.querySelector('.modal-wrapper');
    const closeBtn = document.querySelector('.closebtn');
    const overlay = document.querySelector('.overlay');

    const handleClick = () => {
        modalWrapper?.classList.remove('show-modal');
        modalWrapper?.classList.add('out');
    }

   closeBtn?.addEventListener('click', handleClick);
   overlay?.addEventListener('click', handleClick);

   return () => {
     closeBtn?.removeEventListener('click', handleClick);
     overlay?.removeEventListener('click', handleClick);
   }
  }, [])

  return(
    <div className="modal-wrapper fixed inset-0 z-10 bg-[rgba(30,27,75,0.6)] backdrop-blur-sm h-screen out" ref={ref}>
      <div className="modal min-w-[500px] rounded-xl relative overflow-hidden z-20">
        <div className="absolute top-0 right-0 p-2">
         <span className="closebtn w-8 h-8 cursor-pointer">
          <Close/>
         </span>
        </div>
       {children}
      </div>
      <div className="overlay w-full h-full absolute inset-0 z-10"></div>
    </div>
  )
}
) 

export default Modal;