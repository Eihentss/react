import Diena from "./Diena";

function App() {
  const primdienastundas = [
    "Sociālās zinības un vēsture",
    "Krievu valoda",
    "Sistēmu programmēšana",
    "Sistēmu programmēšana"
];
const otrdienasstunda = [
    "Sociālās zinības un vēsture",
    "Dabaszinības",
    "Matemātika",
    "Sports"
];
const tresdienasstunda = [
    "Datorsistēmas un datortīkli",
    "Datorsistēmas un datortīkli",
    "Sistēmu programmēšana",
    "Sistēmu programmēšana"
];
  return  (
    <>
      <h3>Stundu saraksts</h3>    
      <Diena nosaukums="pirmdiena" stundas ={primdienastundas}/>
      <Diena nosaukums="otrdiena" stundas ={otrdienasstunda}/>
      <Diena nosaukums="tresdiena" stundas ={tresdienasstunda}/>


    </>
  )
}

export default App
