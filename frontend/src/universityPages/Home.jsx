import Hero from './component/Hero'
import Addmision from './component/Admision'
import ExploreProgram from './component/ExploreProgram';
import Footer from './component/Footer';
import Placement from './component/Placement';

function Home() {
  return (
    <div>
        <Hero/>
        <Addmision/>
        <Placement/>
        <ExploreProgram/>
    </div>
  )
}

export default Home