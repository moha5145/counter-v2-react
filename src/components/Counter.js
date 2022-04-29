const Counter = ({tab, setTab}) => {
    return <div className='counter-component'>
        {tab.map((counter, index) => {
    
            return (<div key={index}>
                <div className='btn-container'>
                    {counter > 0 && 
                        <button 
                            className="minus-btn"
                            onClick={()=> {
                                
                                let newTab = [...tab]
                                newTab[index] = newTab[index] -1 
                                console.log(counter)
                                setTab(newTab)
                                
                            }}
                        >-</button> 
                    }
    
                    <div className="displaly-and-reset">
                        <div className='display bg-purple color-white'>
                            {counter}
                        </div>

                        <button className='reset bg-purple color-white' 
                                    onClick={()=> {
                                    let newTab = [...tab]
                                    newTab[index] = newTab[index] = 0
                                    setTab(newTab)
                                }}
        
                        >reset</button>       
                    </div>
                    

                    {counter < 10 && <button 
                        className="plus-btn"
                        onClick={()=> {
                        
                        let newTab = [...tab]
                        newTab[index] = newTab[index] +1 
                        setTab(newTab)
                   
                    }}>+</button>}
                </div>
    
                    
            </div>)
        })}

    
  </div>
}

export default Counter

