import React, { useContext, useEffect, useState } from 'react'
import PointTable from '../components/TableContainer'

import { DataProvider } from '../context'
import { freeFootballAPI, testingAPI } from '../API'


export default function Home(props) {
  const [standings, setStandings] = useState([])
  const { getStandings } = useContext(DataProvider)
  const leagesToShow = ['PL', 'ELC', 'PD', 'BL1', 'SA', 'FL1']
  useEffect(() => {
    // testingAPI({
    //   url: 'apjx2'
    // }).then(resp => setStandings(prev => [...prev, {
    //   data: resp.data
    // }]))
    leagesToShow.forEach(league => {
      freeFootballAPI({
        url: `competitions/${league}/standings`
      }).then(resp => setStandings(prev => [...prev, {
        data: resp.data
      }]))

    })

  }, [])

  if (standings.length !== leagesToShow.length) {
    return <h1>Havent rendered yet</h1>
  }
  const LeagueTable = standings.map((team, index) => {
    return <PointTable key={index} standings={team.data} />
  })
  return (
    <React.Fragment >
      {LeagueTable}
      {console.log(standings[0].data)}
    </React.Fragment >

  )
}
