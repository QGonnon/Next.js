import { useState } from 'react'
import styles from './Main.module.css'
import ProfileForm from '../Profile/ProfileForm'
import ProfiletList from '../Profile/ProfileList'
import { FilterProfileListProvider } from '../../context/FilterProfileList'
import ProfileFormFilter from '../Profile/ProfileFormFilter'

function Main() {
  const [data, setData] = useState([
  {
    "id": 1,
    "first_name": "Deb",
    "last_name": "Tavner",
    "email": "dtavner0@devhub.com",
    "dateOfBirth": 2002
  }, {
    "id": 2,
    "first_name": "Meg",
    "last_name": "Reicherz",
    "email": "mreicherz1@barnesandnoble.com",
    "dateOfBirth": 1993
  }, {
    "id": 3,
    "first_name": "Maribelle",
    "last_name": "Hallan",
    "email": "mhallan2@icio.us",
    "dateOfBirth": 2012
  }, {
    "id": 4,
    "first_name": "Aguie",
    "last_name": "Coche",
    "email": "acoche3@nba.com",
    "dateOfBirth": 2003
  }, {
    "id": 5,
    "first_name": "Hirsch",
    "last_name": "Cornelis",
    "email": "hcornelis4@businesswire.com",
    "dateOfBirth": 1999
  }, {
    "id": 6,
    "first_name": "Clarie",
    "last_name": "Rawles",
    "email": "crawles5@pcworld.com",
    "dateOfBirth": 2009
  }, {
    "id": 7,
    "first_name": "Siusan",
    "last_name": "Scallon",
    "email": "sscallon6@nationalgeographic.com",
    "dateOfBirth": 1971
  }, {
    "id": 8,
    "first_name": "Seline",
    "last_name": "Franz-Schoninger",
    "email": "sfranzschoninger7@free.fr",
    "dateOfBirth": 1990
  }, {
    "id": 9,
    "first_name": "Mariejeanne",
    "last_name": "Silk",
    "email": "msilk8@php.net",
    "dateOfBirth": 2007
  }, {
    "id": 10,
    "first_name": "Madelon",
    "last_name": "Fynn",
    "email": "mfynn9@wisc.edu",
    "dateOfBirth": 1994
  }])

  function AddProduct({ first_name, last_name, email, dateOfBirth }) {
    setData((prevState) => ([...prevState, { "id": prevState[prevState.length - 1].id + 1, first_name, last_name, email, dateOfBirth }]))
  }
  return (
    <div className={styles.main}>
      <ProfileForm childAddProduct={AddProduct} />
      <br />
      <ProfileFormFilter/>
      <br />
      <FilterProfileListProvider>
        <ProfiletList data={data} />
      </FilterProfileListProvider>
    </div>
  )
}

export default Main
