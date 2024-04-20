import React from "react"

type ContainerProps = {
  children: React.ReactNode
}

export default function Container({children}: ContainerProps){
  return(
    <div className="max-w-7xl px-6 m-auto">
      {children}
    </div>
  )
}