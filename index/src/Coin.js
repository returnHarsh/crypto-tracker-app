import './coin.css'
import React from 'react'

function Coin(props) {
    return (
        <div className='coin-container'>

            <div className='coin-row'>


                <div className='coin'>

                    <img src={props.image} alt="error" />
                    <h1>{props.name}</h1>
                    <p className='coin-symbol'>{props.symbol}</p>

                </div>



                <div className='coin-data'>

                    <p className='coin-price'>${props.price}</p>
                    <p className='coin-volume'>${props.volume.toLocaleString()}</p>

                    {
                        props.priceChange < 0 ? (
                            <p className="coin-percent red">{props.priceChange.toFixed((2))}%</p>
                        ) : (<p className="coin-percent green">{props.priceChange.toFixed((2))}%</p>)
                    }
                    <p className="coin-marketCap">
                        MKT Cap :${props.marketcap.toLocaleString()}
                    </p>


                </div>
            </div>
        </div>
    )
}

export default Coin