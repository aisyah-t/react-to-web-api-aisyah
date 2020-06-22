import React from 'react'

const Widget = props => {
    return (
        <article>
            <div className="text">
                <h2>{props.data.name}</h2>
                    <p>
                        <strong>Widget ID:</strong> {props.data.id}
                    </p>
                    <p>
                        <strong>Size:</strong> {props.data.price}
                    </p>
                    <p> 
                        <strong>Stock:</strong> {props.data.inStock}
                    </p>
            </div>
        </article>
    )
}

export default Widget