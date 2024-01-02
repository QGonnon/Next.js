import { useState } from 'react'
import styles from './ProfileCardEdit.module.css'

export default function ProfileCardEdit({profileInfo, childHandleSubmit}) {
  const [formData, setFormData] = useState({
    name: profileInfo.name,
    yo: profileInfo.yo,
    drivingLicenseCar: profileInfo.drivingLicenseCar,
    drivingLicenseBike: profileInfo.drivingLicenseBike
  })
  function handleChange (event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  function handleSubmit (event) {
    event.preventDefault();
    childHandleSubmit(formData)
  };
  

  return (
      <article className={styles.article}>
        <form onSubmit={handleSubmit}>
          <main>
            <div><div>Nom : </div><input name="name" value={formData.name} onChange={handleChange} /></div>
            <div><div>Age : </div><input name="yo" value={formData.yo} onChange={handleChange} /></div>
            <div><div>Licence automobile : </div><input name="drivingLicenseCar" value={formData.drivingLicenseCar} onChange={handleChange} /></div>
            <div><div>Licence moto : </div><input name="drivingLicenseBike" value={formData.drivingLicenseBike} onChange={handleChange} /></div>
          </main>
          <button>Submit</button>
        </form>
      </article>
  )
}

