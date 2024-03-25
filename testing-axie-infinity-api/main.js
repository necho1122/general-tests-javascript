import './style.css'
import axios from 'axios'

let config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'https://api-gateway.skymavis.com/origins/v2/season-leaderboards',
  headers: { 
    'Accept': 'application/json', 
    'X-API-Key': '5M7XKwSOZmkKW8P7AFH9d3NquIu9kpNp'
  }
};

const getLeaderboard = async () => {
  try {
    const response = await axios(config)
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}

getLeaderboard()

document.querySelector('#app').innerHTML = `
  <h1>Hello there</h1>
`
