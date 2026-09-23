import './App.css'
import AddressInfo from './component/AddressInfo'
import Banner from './component/Banner'
import GetInTouch from './component/GetInTouch'
import PanIndia from './component/PanIndia'
import Products from './component/Products'
import QualityStandards from './component/QualityStandards'
import SecondBanner from './component/SecondBanner'
import TermsAndConditions from './component/TermsAndConditions'

function App() {
  return (
    <>
      <main>
        <Banner />
        <SecondBanner />
        <Products />
        <QualityStandards />
        <PanIndia />
        <GetInTouch />
        <AddressInfo />
        <TermsAndConditions />
      </main>
    </>
  )
}

export default App
