import React, {useState} from 'react'

const Accord = (props) => {
    const [item, setItem] = useState(props.datas);
    const handletoggleActive = () =>{
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active: newActive})
    }
  return (
    <>
    

    <div className={`bg-[#e9e9e9] p-5 border border-[#c9c6c655] rounded-md w-[180px] group ${item.active === 1 ? 'is-active': ''}`}>
        <div className='flex items-center'>
            <div className='w-full group-[.is-active]:font-bold'>
                {item.question}
            </div>
            <div className='text-xl rotate-[270deg] group-[.is-active]:rotate-[360deg] cursor-pointer transition-all duration-500' onClick={handletoggleActive}> 
            
            <img
                 src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                    className="h-2 w-3 "
                />

             </div>
        </div>
        <div className='overflow-hidden max-h-0 group-[.is-active]:max-h-[100px]'>
            {item.answer}
        </div>
    </div>
    
    
    </>
  )
}

export default Accord