import React from "react"
const LocationContainer = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export { LocationContainer }