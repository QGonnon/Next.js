import styles from './ProfileForm.module.css'
import React, { useState } from 'react'

export default function ProfileForm({childAddProduct}) {
      const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        dateOfBirth: ""
      })

      function handleChange (event) {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      };
      function handleSubmit (event) {
        event.preventDefault();
        childAddProduct(formData)
      };
      
    
      return (
          <article className={styles.article}>
            <form onSubmit={handleSubmit}>
              <main>
                <div><div>Prénom : </div><input name="first_name" value={formData.first_name} onChange={handleChange} /></div>
                <div><div>Nom : </div><input name="last_name" value={formData.last_name} onChange={handleChange} /></div>
                <div><div>Email : </div><input name="email" value={formData.email} onChange={handleChange} /></div>
                <div><div>Date de naissance : </div><input name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} /></div>
              </main>
              <button>Submit</button>
            </form>
          </article>
      )
}
