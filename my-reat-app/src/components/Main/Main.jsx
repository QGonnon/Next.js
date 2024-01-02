import { useState } from 'react'
import styles from './Main.module.css'

function Main() {
  const [profileInfo, setProfileInfo] = useState({
    name: 'Quentin GONNON',
    yo : "20",
    drivingLicenseCar: "non",
    drivingLicenseBike: "oui"
  })
  return (
    <>
      <article className={styles.article}>
        <header><div>{profileInfo.name} <br /> {profileInfo.yo}</div></header>
        <main>
          <div>Licence automobile : {profileInfo.drivingLicenseCar}</div>
          <div>Licence moto : {profileInfo.drivingLicenseBike}</div>
        </main>
      </article>
    </>
  )
}

export default Main
