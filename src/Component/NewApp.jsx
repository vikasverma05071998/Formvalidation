import React, { useState } from 'react'
import Form from './Form'

export default function Newapp() {

    const[item,setItem] = useState([
        {id:1,img:
            'https://images-eu.ssl-images-amazon.com/images/I/31BQyg5JUKL._SX300_SY300_QL70_FMwebp_.jpg',text:'LG gram17'
    },{id:2, img:'https://images-eu.ssl-images-amazon.com/images/I/41DHBo5r6hL._SX300_SY300_QL70_FMwebp_.jpg',text:'Asus'},
    {id:3, img:'https://images-eu.ssl-images-amazon.com/images/I/31-mHPwE1RL._SX300_SY300_QL70_FMwebp_.jpg',text:'LG gram16'}
    ])
  return (
    <div className='container'>
        {item.map((ind, items)=>{
            return (
                <div >
            <img src={ind.img}/>
            <h1>{ind.text}</h1>
            
            <Form/>
            </div>
                
            )
        })}





    </div>
  )
}
