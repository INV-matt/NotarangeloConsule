import desk from '../imgs/desk.png';
import desk2 from '../imgs/teacher desk.png'

const Desk = ({person}) => {
    
    return ( 
        <div className='desk'>
            <img src={desk} alt="desk" className='desk_img' />
            <p className=''>{person}</p>
        </div>
    );
}

const RndDesk = () => {
    
    const cl_array = ["Bilali", "Boldi", 'Capoferri', 'Casta', 'Dalgrosso', 'Danesi', 'Deou', 'Dequeker', 'Faini', 'Gasparotti', 'Ghidini', 'Gurini', 'Hrzallah', 'Kemta', 'Manara', 'Marini', 'Micheletti', 'Morandi', 'Notarangelo', 'Reccagni', 'Rodella', 'Romano', 'Rubagotti', 'Salodini', 'Salvadori', 'Ventura'];

    let Array2D = (r,c) => [...Array(r)].map(_=>Array(c).fill(0));

    const shuffle = (array) => {
        var m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        array.splice(26, 0, 'BUCO')
        array.splice(27, 0, 'BUCO')
        array.splice(28, 0, 'BUCO')
        array.splice(29, 0, 'BUCO')
        array.splice(30, 0, 'BUCO')
        array.splice(31, 0, 'BUCO')
        
    }
    
    const bidimArray = (s_array) => {
        let cols = 8;
        let rows = 4;
        let f_array = Array2D(rows, cols)
        
        for (let i=0; i<rows; i++){
            for (let j=0; j<cols; j++){
                f_array[i][j] = s_array[i*cols+j];
            }
        }

        return f_array
    }

    return (
        <div>
            {shuffle(cl_array)}
            {console.log(cl_array)}
            <div className='rnd_deskrow'>
                <img src={desk2} alt="teacher's desk" className='teacher_desk r180d'/>
                {
                    bidimArray(cl_array).map(a => (
                        <div className="rnd_desk">
                        {a.map((p, i) => (
                            <div className='rnd_desk'>
                                <Desk key={i} person={p}/>
                            </div>
                        ))}
                        </div>
                    ))
                }
            </div>
        </div>
    );

}
 
export default RndDesk;