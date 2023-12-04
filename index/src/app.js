import './app.css'
import React ,{useState , useEffect} from 'react'
import axios from 'axios'
import Coin from './Coin';

function APP() {

  const[coins , setCoins] = useState([]);
  const[search , setSearch] = useState("");
 
  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(res=>{
setCoins(res.data);
    }).catch(error=>{
      console.log("error in fetching data");
    })

    
  },[]);

  function handleChange(e)
  {
setSearch(e.target.value);
  }

  const filterCoins = coins.filter(coin=>{
    const coinName = coin.name.toLowerCase();
    const searchName = search.toLowerCase();
    return coinName.includes(searchName);
      })

  return(
    <div className='coin-app'>

      <div className='coin-search'>
        <h1 className='coin-text'>Search a Currency</h1>

<form>
  <input type="text" className='coin-input' placeholder='search' onChange={handleChange} />
</form>

      </div>


{filterCoins.map(e=>{
return <Coin
name = {e.name}
image = {e.image}
symbol = {e.symbol}
price = {e.current_price}
volume = {e.total_volume}
priceChange = {e.price_change_percentage_24h}
marketcap = {e.market_cap}
>

</Coin>
})}

    </div>
  );

}

export default APP