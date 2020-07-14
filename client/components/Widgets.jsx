import React from "react";
import Delete from "./Delete";
import Update from "./Update";

function Widget(props) {
  return (
    <article>
      <div className="text">
        <h2>{props.data.name}</h2>
        <p>Widget ID: {props.data.id}</p>
        <p>Size: {props.data.price}</p>
        <p>MFG: {props.data.mfg}</p>
        <p>Stock: {props.data.inStock}</p>
        <p>Rating: {props.data.rating}</p>
        <Update
          id={props.data.id}
          widget={props.data}
          updateWidget={props.updateWidget}
        />
        <Delete id={props.data.id} removeWidget={props.removeWidget} />
      </div>
    </article>
  );
}

export default Widget;
