const Counter = ({tab, setTab}) => {
    return <div className='main'>
        {tab.map((counter, index) => {
    
            return (<div key={index}>
                <div className='counter'>
                    <button 
                        onClick={()=> {
                            
                            let newTab = [...tab]
                            newTab[index] = newTab[index] -1 
                            console.log(newTab)
                            setTab(newTab)
                            // console.log(newTab)
                            
                        }}
                    >-</button>
    
                    <div className='display bg-purple color-white'>
                        {counter}
                    </div>

                    <button onClick={()=> {
                        
                            let newTab = [...tab]
                            newTab[index] = newTab[index] +1 
                            setTab(newTab)
                       
                    }}>+</button>
                    </div>
    
                    <button className='reset bg-purple color-white' onClick={()=> {
                         setTab([0])
                    }}
    
                    >reset</button>
                </div>)
        })}

    
  </div>
}

export default Counter

