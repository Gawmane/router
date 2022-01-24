import style from '../Contact/Contact.module.scss'
import { useState } from "react"


export const Contact = () => {
        // hook med variabl og sætter
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [option, setOption] = useState('');
        
  
	
//        Const- vi siger sætter's indhold findes i - Form - dens navn , dens indhold
        const handling = form => {
                setName(form.name.value)
		setEmail(form.email.value)
		setPhone(form.phone.value)
		setMessage(form.message.value)
		setOption(form.option_metod.value)

         }
        
        return (
     <>
            <h1>Kontakt os her</h1>
  
       <form>      
                 {/*Definere onChange props som indholder anonym funktion med e parameter som giver adgang til value  inde i input tag    */}
           <label htmlFor="name">Fulde navn:</label>
                   <input type="text" name="name" /> 
       
                   <label htmlFor="email">Email:</label>
                   <input type="email"  name="email" />
                  
                   <label htmlFor="phone">Telefon nummer:</label>
                   <input type="number"  name="phone" />

                  <label htmlFor="message">Skriv en besked</label>
                  <textarea type="text" name="message"  ></textarea>

                <label htmlFor="option">Vælg foretrukken kontaktmetode</label>
                  <select  >
                          <option name="option" value="" defaultValue></option>
                          <option name="option_method" value="phone">Telefon</option>
                          <option name="option_method" value="email">Email</option>
                  </select>
                         
                   <button type="button" onClick={e => handling(e.target.form)}>Send</button>
                   <button type="reset"  id="reset">Nulstil</button>
                  
  {/* Ternary operator viser tekst hvis variablerne er fuldt - Gjort for at få både p og {props} med */}
  <div className='reset'>
    {
          name ? <p>Navn: {name} </p>
    :
     ''
    }  
        { email ? <p>Email: {email}</p>
    :
    ''
}
        { phone ? <p>Telefonnummer: {phone}</p>
:
'' }
    {
            message ? <p >Besked: {message}</p>
            :
            ''
    }
    {/* Prøve - style og tekst hvis der ikke bliver udfyldt  */}
    {
            option ? <p style={{fontWeight : "bold"}}>Foretrækker kontakt via: {option}</p>
            :
            'du har ikke valgt dit foretrukne kontaktform '
    }
    </div>
    
           </form>
           </>
	)
}