import React from 'react'
import CallToAction from '../components/CallToAction'
import Specials from '../components/Specials'
import CustomersSay from '../components/CustomersSay'
import Chicago from '../components/Chicago'

export default function HomePage() {
  return (
    <article>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
    </article>
  )
}
