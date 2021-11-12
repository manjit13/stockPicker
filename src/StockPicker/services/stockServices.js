const BASE_URL = 'https://www.alphavantage.co/query'
const key = 'demo'
const fetchWrapper = (url)=>{
    return fetch(url)
    .then((resp)=>resp.json())
    .then((data)=> Promise.resolve(data))
    .catch((err)=> Promise.reject(err))
}

export const fetchStockSuggestions = (symbl) => {
  // symbl = 'tesco'
  const url = `${BASE_URL}?function=SYMBOL_SEARCH&keywords=${symbl}&apikey=${key}`
  return fetchWrapper(url)
}

export const fetchStockInfo = (stock) =>{
  const url = `${BASE_URL}?function=OVERVIEW&symbol=${stock}&apikey=${key}`
  return fetchWrapper(url)
}