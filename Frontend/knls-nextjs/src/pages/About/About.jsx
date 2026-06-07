import AboutOverview from './AboutOverview'
import AboutValues from './AboutValues'
import WhyChooseUs from './WhyChooseUs'
import AboutNetwork from './AboutNetwork'
import GetInTouch from '@/components/GetInTouch'
import AboutHero from './AboutHero'

const About = () => {
  return (
    <>
    <AboutHero/>
    <WhyChooseUs/>
    <AboutOverview/>
    <AboutValues/>
    {/* <AboutNetwork/> */}
    <GetInTouch/>
    </>
  )
}

export default About