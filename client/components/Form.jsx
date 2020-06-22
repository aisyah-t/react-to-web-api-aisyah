import React from 'react'

class newWidget extends React.Component {
    render(){
        return (
            <>
            <label for="name">Name: </label>
            <input type="text" name="name" value=""/>

            <label for="stock">Stock level: </label>
            <input type="text" name="inStock" value=""/>

            <label for="mfg">MFG: </label>
            <input type="text" name="mfg" value=""/>

            </>
        )
    }
}


export default newWidget