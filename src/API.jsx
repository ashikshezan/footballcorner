import axios from 'axios'

export const freeFootballAPI = axios.create({
  baseURL: 'http://api.football-data.org/v2',
  headers: { 'X-Auth-Token': 'c8edaa15323f4a22811f41febf612492' },
  method: 'GET',
  responseType: 'json',
  params: {
    // 'plan': 'TIER_ONE',
    // 'status': 'SCHEDULED',
    // 'limit': '200',
    // 'season': '2016'
  },
})

export const testingAPI = axios.create({
  baseURL: 'https://api.myjson.com/bins',
  method: 'GET',
})
