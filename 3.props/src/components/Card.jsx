import React from 'react'

const Card = (props) => {


  return (
    <>
        <div className="card">
            <h1>{props.name}</h1>
            <img src={props.img} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni praesentium libero eligendi aliquam minima cupiditate eum, nostrum in, voluptates debitis ex hic modi fuga, consequatur eos itaque placeat quia velit?</p>
            <p>Grade={props.grade}</p>
            <button>View Profile</button>
        </div>
    </>
  )
}

export default Card