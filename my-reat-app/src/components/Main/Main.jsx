import { useState } from 'react'
import styles from './Main.module.css'
import ProfileCardEdit from '../ProfileCardEdit/ProfileCardEdit'

function Main() {
  const [profileInfo, setProfileInfo] = useState({
    name: 'Quentin GONNON',
    yo : "20",
    drivingLicenseCar: "non",
    drivingLicenseBike: "oui"
  })

  const [editProfile,setEditProfile] = useState(false)

  function handleSubmit (formData) {
    setProfileInfo(formData)
    setEditProfile(false)
  };

  function handleEditProfile(){
    setEditProfile(true)
  }

  return (
    <>
      <article className={styles.article}>
        <header><div>{profileInfo.name} <br /> {profileInfo.yo} ans</div></header>
        <main>
          <div>Licence automobile : {profileInfo.drivingLicenseCar}</div>
          <div>Licence moto : {profileInfo.drivingLicenseBike}</div>
        </main>
        <button onClick={handleEditProfile}>Edit Profile</button>
      </article>
      {editProfile && <ProfileCardEdit profileInfo={profileInfo} childHandleSubmit={handleSubmit}/>}
    </>
  )
}

export default Main
