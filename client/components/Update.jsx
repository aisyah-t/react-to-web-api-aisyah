import React from 'react'
import { render } from 'enzyme'

//same path pattern as Delete.jsx
function Update (props) {
    function handleSubmit() {
        props.updateWidget(props.id)
    }

    return (
        <>
            <button onClick={handleSubmit}>Edit</button>
        </>
    )
    
}

export default Update