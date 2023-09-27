
import Stunda from "./Stunda";
function Diena(props) {

return (
    <>
    <h1>Sodien ir {props.nosaukums}</h1>
    <ol>
    <Stunda name={props.stundas[0]}/>
    <Stunda name={props.stundas[1]}/>
    <Stunda name={props.stundas[2]}/>
    <Stunda name={props.stundas[3]}/>
    
    
    </ol>

    </>
)
}
export default Diena
