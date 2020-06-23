import React from 'react'

const Widget = props => {
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
            </div>
        </article>
    )
}

export default Widget