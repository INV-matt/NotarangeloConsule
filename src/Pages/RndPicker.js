import img from '../imgs/i-want-you.png';


const RndPicker = () => {

  const cl_array = ["Bilali", "Boldi", 'Capoferri', 'Casta', 'Dalgrosso', 'Danesi', 'Deou', 'Dequeker', 'Faini', 'Gasparotti', 'Ghidini', 'Gurini', 'Hrzallah', 'Kemta', 'Manara', 'Marini', 'Micheletti', 'Morandi', 'Notarangelo', 'Reccagni', 'Rodella', 'Romano', 'Rubagotti', 'Salodini', 'Salvadori', 'Buona Ventura'];

  const Choose = (arr) => {
    let rnd = Math.random()*arr.length;

    return cl_array[Math.floor(rnd)]

  };

  return(<div id='rnd_picker' >

    <div className="b_rnd">
      <p className="b_name" >
          {Choose(cl_array)}
      </p>
    </div>
  

    <div id='i_icy_container'>
      <img src={img} id='img-icy' alt='I Choose You' />
    </div>

  </div>)
}

export default RndPicker;