import React from 'react'
import CallToAction from '../components/CallToAction'
import Specials from '../components/Specials'
import CustomersSay from '../components/CustomersSay'
import Menu from '../components/Menu'

export default function HomePage() {
  return (
    <article>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Menu cancelTopBorder={true}/>
    </article>
  )
}
