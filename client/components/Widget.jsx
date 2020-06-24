import React from 'react'
import Delete from './Delete'

//onCLick and Handle functions require state
//state can only be used in a class component
//for readability try to keep handle actions for specific components contained inside the component and not App

function Widget(props) {

        return (
            <article>
                <div className="text">
                    <h2>{props.data.name}</h2>
                        <p>
                            Widget ID:  {props.data.id}
                        </p>
                        <p>
                            Size:   {props.data.price}
                        </p>
                        <p> 
                            MFG:    {props.data.mfg}
                        </p>
                        <p> 
                            Stock:  {props.data.inStock}
                        </p>
                        <p> 
                            Rating:  {props.data.rating}
                        </p>
                        <Delete id={props.data.id} removeWidget={props.removeWidget}/>
                </div>
            </article>
            )
    }

export default Widget