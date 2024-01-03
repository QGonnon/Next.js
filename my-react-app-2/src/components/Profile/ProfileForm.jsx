import styles from './ProfileForm.module.css'
import React, { useState } from 'react'

export default function ProfileForm() {
      const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: ""
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
                <div><div>Prénom : </div><input name="first_name" value={formData.first_name} onChange={handleChange} /></div>
                <div><div>Nom : </div><input name="last_name" value={formData.last_name} onChange={handleChange} /></div>
                <div><div>email : </div><input name="email" value={formData.email} onChange={handleChange} /></div>
              </main>
              <button>Submit</button>
            </form>
          </article>
      )
}
