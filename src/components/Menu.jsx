import React from 'react'
import {Data} from '../helpers/Data.jsx'
import '../styles/Menu.css'
import MenuItem from './MenuItem.jsx'

export const Menu = () => {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Burgerlerimiz</h1>
        <div className='menuList'>
        {
                Data.map((menuItem, key)=>{
                    return (
                        <MenuItem
                        key={key}
                        image={menuItem.image}
                        name={menuItem.name}
                        content={menuItem.content}
                        price={menuItem.price}/>
                    )

                })
        }
            
        </div>

    </div>

  )
}