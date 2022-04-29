const Counter = ({tab, setTab}) => {
    return <div className='main'>
        {tab.map((counter, index) => {
    
            return (<div key={index}>
                <div className='counter'>
                    {counter > 0 && 
                        <button 
                            onClick={()=> {
                                
                                let newTab = [...tab]
                                newTab[index] = newTab[index] -1 
                                console.log(counter)
                                setTab(newTab)
                                // console.log(newTab)
                                
                            }}
                    >-</button> }
    
                    <div className='display bg-purple color-white'>
                        {counter}
                    </div>

                    {counter < 10 && <button onClick={()=> {
                        
                        let newTab = [...tab]
                        newTab[index] = newTab[index] +1 
                        setTab(newTab)
                   
                    }}>+</button> }
                    </div>
    
                    <button className='reset bg-purple color-white' onClick={()=> {
                        let newTab = [...tab]
                        newTab[index] = newTab[index] = 0
                         setTab(newTab)
                    }}
    
                    >reset</button>
                </div>)
        })}

    
  </div>
}

export default Counter

