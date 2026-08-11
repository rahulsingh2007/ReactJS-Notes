import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
        <>
            <div>
                <div className="card">
                    <h1>{props.user}</h1>
                    <img src={props.img} alt="Image" />
                    <p>{props.desc}</p>
                    <button>Button</button>
                </div>
            </div>
        </>
    )
}

export default Card
