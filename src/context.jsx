import React, { useState, useEffect } from 'react'
import { freeFootballAPI } from './API'
const print = console.log

export const DataProvider = React.createContext()
export default function DataContext(props) {
  return (
    <DataProvider.Provider value={{
      getStandings: getLeagueStandings
    }}>
      {props.children}
    </DataProvider.Provider>
  )
}


function QgetLeagueStandings() {
  const leagues = ['PL', 'ELC', 'PD', 'BL1', 'SA', 'FL1']
  let data = []
  data = leagues.forEach((item) => {
    return freeFootballAPI({
      url: `competitions/${item}/standings`,
    })
      .then(response => response.data)
      .catch(error => print(error))
  })
  console.log(typeof data)
  console.log(data)

  return data
}

function getLeagueStandings() {
  const item = 'PL'
  const data = freeFootballAPI({
    url: `competitions/${item}/standings`,
  })
    .then(response => response)
    .catch(error => print(error))
  return data
}
