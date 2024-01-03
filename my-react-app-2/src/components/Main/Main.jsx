import { useState } from 'react'
import styles from './Main.module.css'
import ProfiletForm from '../Profile/ProfileForm'
import ProfiletList from '../Profile/ProfileList'

function Main() {
  const [data, setData] = useState([
    {
      "id": 1,
      "first_name": "Anthea",
      "last_name": "Hulcoop",
      "email": "ahulcoop0@imdb.com"
    }, {
      "id": 2,
      "first_name": "Clemente",
      "last_name": "Speek",
      "email": "cspeek1@freewebs.com"
    }, {
      "id": 3,
      "first_name": "Petrina",
      "last_name": "Brocket",
      "email": "pbrocket2@friendfeed.com"
    }, {
      "id": 4,
      "first_name": "Mahmud",
      "last_name": "Flowerden",
      "email": "mflowerden3@github.io"
    }, {
      "id": 5,
      "first_name": "Mariel",
      "last_name": "Hirtz",
      "email": "mhirtz4@linkedin.com"
    }, {
      "id": 6,
      "first_name": "Kerrill",
      "last_name": "Filochov",
      "email": "kfilochov5@engadget.com"
    }, {
      "id": 7,
      "first_name": "Arlen",
      "last_name": "Nyles",
      "email": "anyles6@prnewswire.com"
    }, {
      "id": 8,
      "first_name": "Cassie",
      "last_name": "Barwell",
      "email": "cbarwell7@addtoany.com"
    }, {
      "id": 9,
      "first_name": "Caresse",
      "last_name": "Granville",
      "email": "cgranville8@google.com"
    }, {
      "id": 10,
      "first_name": "Andi",
      "last_name": "Craigs",
      "email": "acraigs9@cloudflare.com"
    }])

  function AddProduct(first_name, last_name, email) {
    setData((prevState) => ([...prevState, { "id": prevState[prevState.length - 1].id + 1, first_name, last_name, email }]))
  }
  return (
    <>
      <ProfiletForm childAddProduct={AddProduct}/>
      <ProfiletList data={data} />
    </>
  )
}

export default Main
