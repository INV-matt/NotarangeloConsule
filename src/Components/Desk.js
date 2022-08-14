import desk from '../imgs/desk.png';

const Desk = (person) => {
    return ( 
        <div className='desk'>
            <img src={desk} alt="desk" />
            <p className=''>{person}</p>
        </div>
     );
}
 
export default Desk;