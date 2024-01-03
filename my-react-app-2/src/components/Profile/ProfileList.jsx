import styles from './ProfileList.module.css'
import React from 'react'

export default function ProfileList({data}) {
  console.log(data)
  return (
    <>
      {data.map((e)=>(
        <>
        <article key={e.id} className={styles.article}>
          <main>

            <div>Prénom : {e.first_name}</div>
            <div>Nom : {e.last_name}</div>
            <div>Email : {e.email}</div>
          </main>
        </article>
        </>
      ))}
    </>
  )
}
