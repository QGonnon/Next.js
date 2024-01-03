import { useState } from "react"


export default function PropsExemple({name, childClickHandler}) {
  const [visible, setVisible] = useState(true)

  return (
    <>
      <div className="card">{name}</div>
      <button onClick={()=>{childClickHandler('test');setVisible(!visible)}}>click me !</button>
      <br />
      <br />
      <br />
      {visible && <>test</>}
    </>
  )
}
