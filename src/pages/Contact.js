import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    
    if(name === '' || email === '' || message === ''){
        alert('Por favor, preencha todos os campos')
        return
    }   

    const templateParams = {
        from_name: name,
        email: email,
        message: message,
    }
    
    emailjs.send(
        'service_hoj1bvd',
        'template_97pi303',
        templateParams, 
        'C8DlWmhOs-B90fRgN'
    ).then((response) => {
        console.log('email enviado', response.status)
        setName('')
        setEmail('')
        setMessage('')
    }, (err) => {
        console.log('erro: ', err);
    })
  }

  return (
    <section className='container'>
        <div >
            <form className='email-form' onSubmit={sendEmail}>
                {/* <h2 className='title'>Me mande um Email</h2> */}
                <input 
                    className='input'
                    type="text" 
                    placeholder='Digite seu Nome'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input 
                    className='input'
                    type="email" 
                    placeholder='Digite seu Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <textarea 
                    className='input msg'                    
                    placeholder='Digite sua Mensagem'
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <button type='submit' className='btn'>Enviar</button>
            </form>
        </div>
        <div className='whatsapp'>

        </div>
    </section>
  )
}
