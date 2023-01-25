import data from "./constants/data";
import OpponentCard from "./OpponentCard";
import SubHeading from "./SubHeading";

function Opponents() {
    return (
    <div>
        <h1 className='header-h1'style={{ textAlign: 'center', background: 'var(--color-black)', fontSize: '355%'}}>2023 Opponents</h1>
        {data.opponents.map((opponent) => <OpponentCard opponent={opponent}/>)}
    </div>
    )
}

export default Opponents;