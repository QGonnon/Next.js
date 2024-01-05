import styles from './ProfileList.module.css'
import React, { useContext } from 'react'
import { FilterProfileListContext } from '../../context/FilterProfileList';

export default function ProfileList({data}) {
  const [filterDOB, setfilterDOB] = useContext(FilterProfileListContext);
  console.log(filterDOB)
  return (
    <>
      {data.map((e)=>(
        ((filterDOB=="*"||filterDOB==""||filterDOB==e.dateOfBirth)&&
          <article key={e.id} className={styles.article}>
          <main>
            <div>Prénom : {e.first_name}</div>
            <div>Nom : {e.last_name}</div>
            <div>Email : {e.email}</div>
            <div>Date de naissance : {e.dateOfBirth}</div>
          </main>
        </article>
        )
      )).reverse()}
    </>
  )
}
