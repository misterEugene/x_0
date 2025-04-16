import { useEffect, useState } from 'react'
import './App.css'
function App() {

  const [fields, setFields] = useState([1,2,3,4,5,6,7,8,9])
  

  console.log(fields.map(item => <div className="space_gaming"></div>));
        
  

  return (
    <>
    <div className="root">
      <div className='play_board'>
        {fields.map(item => <div data-field-id={item} key={item} className="space_gaming"></div>)}
      </div>
    </div>
    
    </>
  )
}

export default App
