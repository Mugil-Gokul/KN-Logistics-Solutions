import React from 'react'
import ServiceHero from './ServiceHero'
import ServiceMain from './ServiceMain'
import ServiceProcess from './ServiceProcess'
import ServiceTechnology from './ServiceTechnology'
import ServiceFAQ from './ServiceFAQ'
import GetInTouch from '@/components/GetInTouch'

const Services = () => {
  return (
    <>
    <ServiceHero/>
    <ServiceMain/>
    <ServiceProcess/>
    <ServiceTechnology/>
    <ServiceFAQ/>
    <GetInTouch/>
    </>
  )
}

export default Services