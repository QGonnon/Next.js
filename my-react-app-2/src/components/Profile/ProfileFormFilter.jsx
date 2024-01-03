import styles from './ProfileFormFilter.module.css'
import React, { useState } from 'react'

export default function ProfileFormFilter({childAddProduct}) {
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
                <div><div>Date de naissance : </div><input name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} /></div>
                <button>Submit</button>
              </main> 
            </form>
          </article>
      )
}
