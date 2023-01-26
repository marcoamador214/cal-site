import './Roster.css'
import data from './constants/data';

function OffenseCard({ offense }) {
    return (
            <div className='card-container'>
                <div className='card'>
                    <div>
                        <a href={offense.post}>
                        <img src={offense.image} alt={offense.name} className='image-container'/>
                        </a>
                    </div>
                    <div className='card-content'>
                        <div className='card-title'>
                            <h3 style={{ color: 'var(--color-golden)'}}>{offense.name} - #{offense.number}</h3>
                        </div>
                        <div className='card-body'>
                            <p>Pos.: {offense.position} | Class: {offense.Class}</p>
                            <p>Hometown: {offense.Hometown}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

function DefenseCard({ defense }) {
    return (
        <div className='card-container'>
        <div className='card'>
            <div>
                <img src={defense.image} alt={defense.name} className='image-container'/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3 style={{ color: 'var(--color-golden)'}}>{defense.name} - #{defense.number}</h3>
                </div>
                <div className='card-body'>
                    <p>Pos.: {defense.position} | Class: {defense.Class}</p>
                    <p>Hometown: {defense.Hometown}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

function Roster() {
    return (
        <div className="roster">
            <section>
                <div className='container'>
                    <h2 className='header-h1' style={{ textAlign: 'center', fontSize: '400%' }}>2023 Roster</h2>
                    <div className='cards'>
                        {data.offense.map((offense) => <OffenseCard offense={offense}/>)}
                        {data.defense.map((defense) => <DefenseCard defense={defense}/>)}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Roster;