import React from 'react'
import './Coin.css'
const Coin = ({ price, volume, image, name, symbol, priceChange, marketCap }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"></img>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price"> ${price}</p>
                    <p className="coin-volume"> ${volume}</p>
                    {priceChange > 0 ?
                        (<p className="coin-percent green" >
                            {priceChange.toFixed(2)}%</p>) : (<p className="coin-percent red">
                                {/* {priceChange.toFixed(2)}% */}
                             LOW
                            </p>)
                    }
                    {/* toLocaleString() */}
                    <p className = "coin-marketcap">Mtk Cap :{marketCap}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin;