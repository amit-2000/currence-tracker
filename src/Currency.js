import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import Coin from './Coin'
import './currency.css'

const Currency = () => {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')



    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then((res) => {
                setCoins(res.data)
                console.log(coins)
            })
            .catch((err) => {
                console.log('Error', err)
            })
    }, [])
    const handleChange = e => {
        setSearch(e.target.value)
    };
    const filterCoins = coins.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase())
        // coin.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin text"> Search  a crypto Currency</h1>
                <form>
                    <input type="text" className="coin-input" placeholder="Search.." onChange={handleChange}></input>
                </form>
            </div>
            {filterCoins.map(coin => {
                return (
                    // search={coin.search} 
                    <Coin key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        marketCap={coin.market_cap}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h}
                        volume={coin.total_volume}
                    />
                )
            })}

        </div>
    )

}
export default Currency
