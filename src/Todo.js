import React from 'react'
import todologo from '../src/image/todologo.jpeg' ;
import "../src/App.css";


const Todo = () => {
    return (
        <div className='main'>
            <div className='child'>
                <figure>
                    <img src= {todologo} alt=' todologo' />
                    <figcaption> Start your Day with Fresh! </figcaption>
                </figure>
                

                


            </div>
            <div className='additems'>
                    <input type= "text" placeholder= " List down the tasks.." />
                    <i className="fa fa-plus add-btn" title='Add items'></i>
                    
                </div>
                <div className='showitems'>
                    <div className='eachitems'>
                        <h3>apple</h3>
                        <i className="far fa-trash-alt add-btn" title='Delete items'></i>
                        

                    </div>

                </div>

        </div>
    )
}

export default Todo