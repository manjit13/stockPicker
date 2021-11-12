import React from "react";
import './stockInfo.scss'

const StockInfoTable = ({ stockInfo }) => {

  return <div className='stock-info-cont'>
    {stockInfo.Symbol &&
      <div className='stock-info-table'>
        <div className='stck-item'>Name</div>
        <div>{stockInfo.Name} </div>
        <div>Symbol : </div><div>{stockInfo.Symbol} </div>
        <div>Change its traded on : </div><div>{stockInfo.Exchange} </div>
        <div>Industry : </div><div>{stockInfo.Industry} </div>
        <div>PE Ratio : </div><div>{stockInfo.PERatio} </div>
        <div>Market Cap : </div><div>{stockInfo.MarketCapitalization} </div>
        <div>Description : </div><div>{stockInfo.Description} </div>
      </div>}
    {stockInfo.err && <em>{stockInfo.err}</em>}
  </div>
}
export default StockInfoTable