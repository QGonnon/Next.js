import { useState } from "react"


export default function PropsExemple({name, childClickHandler}) {
  const localName = name

  return (
    <>
      <div className="card">{name}</div>
      <button onClick={()=>{childClickHandler('test')}}>click me !</button>
    </>
  )
}
