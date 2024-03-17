import React, {useState} from 'react'

function SingleInputField({page}) {
    const [checkboxesState, setCheckboxesState] = useState(false)

    function handleInputChange(){
        setCheckboxesState(!checkboxesState)
    }
  return (
    <button type='button' className="toggle-btn" onClick={handleInputChange}>
    <div className="select-field">
      <div className="text-content">{page}</div>
      <div className="checkbox-container">
      <input className="checkbox" type="checkbox" checked={checkboxesState} onChange={handleInputChange} />
      </div>
    </div>
    </button>
  )
}

export default SingleInputField