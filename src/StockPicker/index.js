import React, { useState, useEffect } from 'react'
import './stockPicker.scss'
import SearchStock from './components/searchBar'
import StockInfoTable from './components/StockInfoTable'
import {  fetchStockInfo } from './services/stockServices'

const NO_STOCK_INFO_MSG = 'You have entered incorrect value, Please try another symbol'

const StockPicker = ({refreshInterval}) => {
  const [symbol, setSymbol] = useState('')
  const [stockInfo, setStockInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  
  const onSymbolChange = (val) => {
    setSymbol(val);
  }
  const updateStockData = (val)=>{
    let tofetch = val || symbol
    symbol.length && fetchStockInfo(tofetch)
    .then((info) => {
      setIsLoading(false)
      if (info.Symbol) {
        setStockInfo(info)
      }
      else {
        setStockInfo({ err: NO_STOCK_INFO_MSG })
      }
    })
    .catch(()=>{
      setIsLoading(false)
    })
  }

  const onStockSelect = (val) => {
    console.log(val, 'value')
    setIsLoading(true)
    updateStockData(val)
  }

  return (
    <div className='stock-picker-cont'>
      <SearchStock  onChange={onSymbolChange} val={symbol} onSelect={(val)=>onStockSelect(val)} />
      <StockInfoTable stockInfo={stockInfo} refreshData={updateStockData} symbol={symbol}/>
      {isLoading && <div>...Loading</div>}
    </div>
  )
}

export default StockPicker