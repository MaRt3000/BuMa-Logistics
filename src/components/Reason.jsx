import '../App.css'
import Container from './container'
import Firstman from '../assets/firstman.jpeg'
import Secondman from "../assets/secondman.jpg"
import Woman from '../assets/woman.jpg'
import Shipment from './shipment'

function Reason() {
  

  return (
    <section id="company">
    <div  className="clientEx">
    <h1 className="client">What Our Client Say</h1>
    </div>
    <div className="origin">
      <Container img={Firstman} fullName="Reman Maggie" location="Seoul, South Korea"/>
      <Container img={Woman} fullName="John D'souza" location="New York, USA"/>
      <Container img={Secondman} fullName="Karl Walter" location="Munich, Germany"/>
      
    </div>
    <Shipment />
    </section>
  )
}

export default Reason
