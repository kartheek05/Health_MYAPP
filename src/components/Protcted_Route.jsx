import React from 'react'

function Protcted_Route(islogin,children) {
    if (islogin){
        return children
    }
  return (
    <div>
      Please login first
    </div>
  )
}

export default Protcted_Route
