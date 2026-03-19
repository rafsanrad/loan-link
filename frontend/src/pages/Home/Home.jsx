import HeroBanner from '../../components/Home/HeroBanner'
import HowItWorks from '../../components/Home/HowItWorks'
import Plants from '../../components/Home/Plants'

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Plants />
      <HowItWorks></HowItWorks>
      {/* More components */}
    </div>
  )
}

export default Home
