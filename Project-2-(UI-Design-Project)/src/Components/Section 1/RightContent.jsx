import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    return (
        <>
            <div id='right' className='h-full w-2/3 p-6 rounded-4xl flex overflow-x-auto flex-nowrap gap-10'>
                {props.users.map(function (elem, idx) {
                    return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} color={elem.color} tag={elem.tag} />
                })}

            </div>
        </>
    )
}

export default RightContent
