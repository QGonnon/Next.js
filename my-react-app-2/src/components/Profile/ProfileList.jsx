import styles from './ProfileList.module.css'
import React from 'react'

export default function ProfileList({data}) {
  console.log(data)
  return (
    <div>
      {data.map((e)=>(
        <>
        <article key={e.id} className={styles.article}>
          <div>{e.first_name}</div>
          <div>{e.last_name}</div>
          <div>{e.email}</div>
        </article>
        </>
      ))}
    </div>
  )
}
