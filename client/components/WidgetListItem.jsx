import React from 'react'

export default function WidgetListItem ({widget, showDetails, deleteWidget, editWidget}) {
  return (
    <div className='widget-list-item'>
      {`${widget.name} `}
      <a href='#' id={`show-${widget.id}`} onClick={() => showDetails(widget)}>details</a> {' | '}
      <a href='#' id={`delete-${widget.id}`} onClick={() => deleteWidget(widget)}>delete</a> {' | '}
      <a href='#' id={`edit-${widget.id}`} onClick={() => editWidget(widget)}>edit</a>
    </div>
  )
}
