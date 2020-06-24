import React from 'react'

function Delete (props) {
    //id is being passed from Widget.jsx which gets it from App.jsx
    function handleSubmit() {
        //use imported function to push new object to widgets array in app
        props.removeWidget(props.id)
    }

    return (
        <>
            <button onClick={handleSubmit}>Delete</button>
        </>
    )
    
}

export default Delete