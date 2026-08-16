import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <>
            <div className='h-full w-80 rounded-4xl overflow-hidden relative shrink-0'>
                <img className='h-full w-full object-cover' src={props.img} alt="Person1" />
                <RightCardContent id={props.id} intro={props.intro} color={props.color} tag={props.tag} />
            </div>
        </>
    )
}

export default RightCard
