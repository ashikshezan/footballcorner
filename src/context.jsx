import React, { useState, useEffect } from 'react'
import axios from 'axios'

const print = console.log

export const DataProvider = React.createContext()
export default function DataContext(props) {

  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <DataProvider.Provider value={''}>
      {props.children}
    </DataProvider.Provider>
  )
}

function fetchdata() {
  print('Hello')
  let url = "http://api.football-data.org/v2/competitions"
  url = "https://api.football-data.org/v2/players/2019/matches"
  url = 'https://api.football-data.org/v2/competitions/SA/scorers'
  url = 'http://api.football-data.org/v2/competitions/PL/teams'
  axios({
    method: 'GET',
    headers: { 'X-Auth-Token': 'c8edaa15323f4a22811f41febf612492' },
    url: url,
    params: {
      // 'plan': 'TIER_ONE',
      // 'status': 'SCHEDULED',
      // 'limit': '200',
      'season': '2016'
    },
    responseType: 'json'
  })
    .then(response => print(response))
    .catch(error => print(error))
}