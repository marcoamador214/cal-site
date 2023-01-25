import SubHeading from "./SubHeading";

function OpponentCard({ opponent }) {
    return (
        <div className='header app__wrapper app__padding' id='home'>
        <div className='app__wrapper_info header_info' style={{ marginLeft: '200px'}}>
          <SubHeading title={opponent.date + ' - ' + opponent.location}/>
          <h1 className='header-h1'>{opponent.name} {opponent.mascot}</h1>
          <p className='p__opensans'>{opponent.stadium}</p>
          {/* <button type='button' className='custom__button'>Next ⬇️</button> */}
        </div>
        <div className='app__wrapper_img' style={{ marginRight: '270px'}}>
          <img className='header_img' src={opponent.logo} alt='Myles Williams' style={{ minWidth: '80%'}}/>
        </div>
      </div>
    )
}

export default OpponentCard;