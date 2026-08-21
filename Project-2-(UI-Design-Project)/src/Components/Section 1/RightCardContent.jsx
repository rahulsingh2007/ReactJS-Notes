import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
    return (
        <>
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                <h2 className='bg-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-semibold'>{props.id + 1}</h2>
                <div>
                    <div>
                        <p className='text-shadow-lg text-lg text-white leading-relaxed mb-14'>{props.intro}</p>
                    </div>
                    <div className='flex justify-between'>
                        <button style={{ backgroundColor: props.color }} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                        <button style={{ backgroundColor: props.color }} className='bg-blue-600 text-white font-medium px-3 py-3 rounded-full'><ArrowRight size={16} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightCardContent
