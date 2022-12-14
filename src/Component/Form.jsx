
import React, { useState } from 'react'

import { useForm } from 'react-hook-form'

export default function Form() {
    const [set, setState] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (value) => {
        console.log(value)                    
     const feed = JSON.stringify(value);
            alert(feed);        
    }
    return (    
        <>  
                <div> 
                <button id='btnn' onClick={()=>setState((value)=> !value)}>Feedback</button> 
                </div>
        <div className='containor'>
                          
                     
          
            
            {set && <form onSubmit={handleSubmit(onSubmit)} className='kol'>
            <h1>Feedback Form </h1>
                <div>
                    <lable className='rat'>Rating</lable><br />
                    <input className="rating" type='number'  min='1' max='5'
                    {...register('rating',
                    {
                        required:{value:true}
                    })}
                    />
                     
                </div>
                <div>
                    <label id='name'>your name</label><br />
                    <input id='txt' type='text' {...register('name',{
                        required:{value:true, message:'mandatory'},
                        minLength:{value:2, message:'must be greate then two number'},
                        maxLength:{value:15,message:'less then 15 characters'}
                    })}

                    />
                    <label>{errors?.name?.message}</label>
                </div>
                <div>
                    <label id='comment'>Comment</label><br />
                    <textarea className='texx' type='text' 
                    {
                        ...register('Comment',{
                            required:{value:true}
                        })
                    }
                    
                    
                    />
                </div>
                <div>
                    <input  id='sub' type='submit' value='submit' />

                </div>

            </form>}
            </div>
        </>                 
    )
}
