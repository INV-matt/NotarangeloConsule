import desk from '../imgs/desk.png';

const Desk = ({person}) => {
    
    return ( 
        <div className='desk'>
            <img src={desk} alt="desk" className='desk_img' />
            <p className=''>{person}</p>
        </div>
    );
}

const RndDesk = () => {
    
    const cl_array = ["Bilali", "Boldi", 'Capoferri', 'Casta', 'Dalgrosso', 'Danesi', 'Deou', 'Dequeker', 'Faini', 'Gasparotti', 'Ghidini', 'Gurini', 'Hrzallah', 'Kemta', 'Manara', 'Marini', 'Micheletti', 'Morandi', 'Notarangelo', 'Reccagni', 'Rodella', 'Romano', 'Rubagotti', 'Salodini', 'Salvadori', 'Tonolli', 'Ventura'];

    let Array2D = (r,c) => [...Array(r)].map(_=>Array(c).fill(0));

    const shuffle = (array) => {
        var m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
        array.splice(6, 0, 'BUCO')
    }
    
    const bidimArray = (s_array) => {
        let f_array = Array2D(4, 7)
        
        for (let i=0; i<4; i++){
            for (let j=0; j<7; j++){
                f_array[i][j] = s_array[i*7+j];
            }
        }

        return f_array
    }

    console.log('prova')


    return (
        <div>
            {shuffle(cl_array)}
            {console.log(cl_array)}
            <div className='rnd_deskrow'>
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