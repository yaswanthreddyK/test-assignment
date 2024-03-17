import React from 'react'
import "./App.css"
import SingleInputField from './SingleInputField'

function App() {


 const pageList = [];
 for(let i=1; i<=6; i++){
  pageList.push(<SingleInputField key={i} page={`Page ${i}`}/>)
 }

  return (
    <div className='app-container'>
      <div className='main-container'>
          <div className="island">
            <form action="" onSubmit={(e) => e.preventDefault()}>
           <SingleInputField page={"All pages"}/>
           <div className='border'></div>
           <div className='pages-list'>  
            {
              pageList
            }
           </div>
            <div className='border'></div>
            <div className='submit-btn-container'>
            <button className='submit-btn' type='submit'>Done</button>
            </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default App