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
                    <div className='btn'>
                    <i className="fa fa-plus " title='Add items'></i>
                    </div>
                    
                    
                </div>
                <div className='showitems'>
                    <div className='eachitems'>
                        <h3>apple</h3>
                        <div className='btn'>
                        <i className="far fa-trash-alt " title='Delete items'></i>
                        </div>
                       
                        

                    </div>

                </div>

        </div>
    )
}

export default Todo