import './globals.css'
import MainContent from './main/MainContent'
import Navigation from './nav/Navigation'
export default function Home(){
  return <div className="page-container">
      <Navigation/>
      <MainContent/>
  </div>
}