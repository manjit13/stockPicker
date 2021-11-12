import React, { useState, useCallback } from 'react'
import './searchBar.scss'
import { debounce } from '../../utils/helper'
import { fetchStockSuggestions } from '../../services/stockServices.js'


const SeacrchStock = ({ onChange, val, onSelect }) => {
  const [showSugg, setShowSugg] = useState(false)
  const [sugs, setSugs] = useState([])

  const handleShowSugg = () => {
    setShowSugg(true)
  }
  const handleHideSugg = () => {
    setShowSugg(false)
  }
  const handleSymbolChange = (evt) => {
    onChange(evt.target.value)
    debouncedSave(evt.target.value)
   
  }
  const getSuggestions = (newValue)=>{
    fetchStockSuggestions(newValue)
    .then((data) => {
      if (data.bestMatches) {
        setSugs(data.bestMatches)
      } else {
        setSugs([])
      }
    })
  }

  const debouncedSave = useCallback(
    debounce((newValue) => getSuggestions(newValue), 1000),
    []
);

const onStockSelect = (val)=>{
  handleHideSugg();
  onSelect(val);
}

  return <div className='stock-search'>
    <input placeholder='Search Symbol' className='srch-inp' onChange={handleSymbolChange} value={val} onFocus={handleShowSugg}  />
    <button className='blu-btn' onClick={()=>onStockSelect(val)}>Search</button>

    {sugs.length > 0 && showSugg &&
      <div className='sug-cont'>{
        sugs.map((sug) => <div className='sug-tpl' onClick={() => { onStockSelect(sug['1. symbol']) }}>
          <em>{sug['1. symbol']}</em>
          <em className='sug-name'>{sug["2. name"]}</em>
        </div>)
      }</div>
    }
    {sugs.length == 0 && showSugg && val.length > 0 &&
      <div>No Data Found</div>
    }
  </div>
}
export default SeacrchStock