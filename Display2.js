import React from 'react'

export default class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            usd: 'USD',
            eur: 'EUR', 
            gbp: 'GBP'

        }
    }

    return() {
        render(
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
}
