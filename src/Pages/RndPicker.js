import { useState } from 'react';

const RndPicker = () => {

  const cl_array = ["Bilali", "Boldi", 'Capoferri', 'Casta', 'Dalgrosso', 'Danesi', 'Deou', 'Dequeker', 'Faini', 'Gasparotti', 'Ghidini', 'Gurini', 'Hrzallah', 'Kemta', 'Manara', 'Marini', 'Micheletti', 'Morandi', 'Notarangelo', 'Reccagni', 'Rodella', 'Romano', 'Rubagotti', 'Salodini', 'Salvadori', 'Ventura'];
  let firstNarr = []

  const [NumberOfPpl, SetNumberOfPpl] = useState()

  const shuffle2 = (array) => {
      var m = array.length, t, i;
      while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
      }
  }

  const Show = (e) => {
      e.preventDefault();

      shuffle2(cl_array);
      firstNarr = cl_array.slice(0, parseInt(NumberOfPpl));


  }

  return(<>

    { firstNarr.map(_ => {
              <p key={_.id}>_</p>
        })
    }

      {
          <form className='' onSubmit={Show}>
              <input placeholder='' value={NumberOfPpl} onChange={(e) => SetNumberOfPpl(e.target.value)}/>
              <button className='nerd-icons' type='submit'></button>
          </form>
      }

  </>)
}

export default RndPicker;