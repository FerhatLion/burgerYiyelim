import React from 'react'
import ContactImage from '../assets/BurgerYiyelimKIletisim.jpg'
import '../styles/Contact.css'


export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide'>
        <img src={ContactImage} alt="iletisim" />
      </div>
      <div className='rightSide'>
        <h1>Bizimle İletişime Geçin</h1>
        <form >
          <label >Ad Soyad</label>
          <input type="text" name="name" placeholder='Lütfen adınızı soyadınızı giriniz...' />
          <label >Email</label>
          <input type="email" name="email" placeholder='Lütfen emailinizi giriniz...' />
          <label >Mesaj</label>
          <textarea  rows='6' name="mesaj" placeholder='Lütfen mesajınızı giriniz...' > </textarea>
        </form>
      </div>
    </div>
  )
}

