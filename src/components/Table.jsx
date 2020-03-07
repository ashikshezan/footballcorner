import React from 'react'
import '../Table.css'

export default function Table(props) {
  if (!props.data) {
    return <h1>Not ready</h1>
  }
  const teams = props.data.map(team => {
    return (
      <tr key={team.position}>
        <td colSpan='1'>{team.position}</td>
        <td colSpan='2'>
          <div>
            <img src={team.team.crestUrl} alt="" width='20' height='20' />
            <b>{team.team.name}</b>
          </div>
        </td>
        <td colSpan='1'>{team.playedGames}</td>
        <td colSpan=''>{team.won}</td>
        <td colSpan=''>{team.draw}</td>
        <td colSpan=''>{team.lost}</td>
        <td colSpan='1'>{team.points}</td>
      </tr>
    )
  })
  return (
    <React.Fragment>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th colSpan='1'>#</th>
              <th colSpan='2'>Team</th>
              <th colSpan='1'>P</th>
              <th colSpan='1'>W</th>
              <th colSpan='1'>D</th>
              <th colSpan='1'>L</th>
              <th colSpan='1'>PT</th>
            </tr>
          </thead>
          <tbody>
            {teams}
          </tbody>
        </table>

      </div>
    </React.Fragment>
  )
}
