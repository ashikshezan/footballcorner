import React from 'react'
import Table from '../components/Table'
import Tittle from '../components/Title'

export default function Home() {
  return (
    <React.Fragment>
      <section className="point-table">
        <Tittle title={'Primier League'} />
        <Table />
      </section>
      <section className="point-table">
        <Tittle title={'Primier League'} />
        <Table />
      </section>
      <section className="point-table">
        <Tittle title={'Primier League'} />
        <Table />
      </section>
      <section className="point-table">
        <Tittle title={'Primier League'} />
        <Table />
      </section>
    </React.Fragment>
  )
}
