import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import './App.css'

function Display() {
    const [bitcoinUSD, setBitcoinUSD] = useState([])
    const [bitcoinEUR, setBitcoinEUR] = useState([])
    const [bitcoinGBP, setBitcoinGBP] = useState([])
    const [disclaimer, setDisclaimer] = useState([])

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(data => {
                setBitcoinUSD(data.bpi.USD) // set users in state
                setBitcoinEUR(data.bpi.EUR)
                setBitcoinGBP(data.bpi.GBP)
                setDisclaimer(data.disclaimer)
                console.log(bitcoinGBP)
            })
    }, [])

    return (
        <React.Fragment>
            <h1> Current Bitcoin Prices </h1>

            <ul className="grid space-around">
                <li className="repo bg-light">
                    <h2 className="center-text"> USD </h2>
                    <p className="center-text">
                        {' '}
                        {bitcoinUSD.rate_float} &#36;
                    </p>
                </li>
                <li className="repo bg-light">
                    <h2 className="center-text"> EUR </h2>
                    <p className="center-text">
                        {' '}
                        {bitcoinEUR.rate_float} &pound;
                    </p>
                </li>
                <li className="repo bg-light">
                    <h2 className="center-text"> GBP </h2>
                    <p className="center-text">
                        {' '}
                        {bitcoinGBP.rate_float} &euro;
                    </p>
                </li>
            </ul>

            <p> {disclaimer} </p>
        </React.Fragment>
    )
}

export default Display
