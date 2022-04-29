const Counter = ({tab, setTab}) => {
    return <div className='main'>
        {tab.map((counter, index) => {
    
            return (<div key={index}>
                <div className='counter'>
                    <button 
                        onClick={()=> {
                            for(let i = tab.length; i > 0; i--) {
                                let newTab = [...tab]
                                newTab[i] = newTab[i] - 1
                                setTab(newTab)
                                console.log(newTab)
                            }
                        }}
                    >-</button>
    
    <div className='display bg-purple color-white'>{counter}</div>
                    <button onClick={()=> {
                        for(let i = 0; i < tab.length; i++) {
                            let newTab = [...tab]
                            newTab[i] = newTab[i] + 1
                            setTab(newTab)
                        }
                    }}>+</button>
                    </div>
    
                    <button className='reset bg-purple color-white' onClick={()=> {
                         setTab(0)
                    }}
    
                    >reset</button>
                </div>)
        })}

    
  </div>
}

export default Counter

