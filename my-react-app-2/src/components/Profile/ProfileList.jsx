import React from 'react'

export default function ProfileList({data}) {
  return (
    <div>
      {data.map((e=>{
        <article key={e.id}>
          <div>{data.first_name}</div>
          <div>{data.last_name}</div>
          <div>{data.email}</div>
        </article>
      }))}
    </div>
  )
}
