import React from 'react'
import Table from '../components/Table'
import Tittle from '../components/Title'

export default function TableContainer({ standings }) {

  return (
    <section className="point-table">
      <Tittle title={standings.competition.name} />
      <Table data={standings.standings[0].table} />
    </section>
  )
}
