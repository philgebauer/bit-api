async function grabPrice () {
    const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    const res = await fetch(endpoint)
    const data = await res.json()
    console.log("here");
    return data

  }

  export default grabPrice;

