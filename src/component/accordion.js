import React, {useState} from 'react'

const accordion = () => {
    const [item, setItem] = useState(props.datas);
  return (
    <>
    
    <div className='bg-[#e9e9e9] p-5 border border-[#c9c6c655] rounded-md w-[280px] group'>
        <div className='flex items-center'>
            <div className='w-full group-[.is-active]:font-bold'>
                {item.question}
            </div>
            <div className='text-xl rotate-90 group-[.is-active]:rotate-[270deg]' onClick={handletoggle}>> </div>
        </div>
        <div className='overflow-hidden max-h-0 group-[.is-active]:max-h-[100px]'>
            {item.answer}
        </div>
    </div>
    
    </>
  )
}

export default accordion