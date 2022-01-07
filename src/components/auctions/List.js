import './picker.css'

const list = ({ el }) => {

      let color = el.tiendaOxxo.at(0)
      let colorl = el.tiendaOxxo.at(-1)

  return (
    <div className={
      colorl === 'A' && 'c1' || colorl === 'B' && 'c2' || colorl === 'C' && 'c3' ||
      colorl === 'D' && 'c4' || colorl === 'E' && 'c5' || colorl === 'F' && 'c6' ||
      colorl === 'G' && 'c7' || colorl === 'H' && 'c8' || colorl === 'I' && 'c9' ||
      colorl === 'J' && 'c10' || colorl === 'K' && 'c11' || colorl === 'L' && 'c12' ||
      colorl === 'M' && 'c13' || colorl === 'N' && 'c14' || colorl === 'O' && 'c15' ||
      colorl === 'P' && 'c16' || colorl === 'Q' && 'c17' || colorl === 'R' && 'c18' ||
      colorl === 'S' && 'c19' || colorl === 'T' && 'c20' || colorl === 'U' && 'c21' ||
      colorl === 'V' && 'c22' || colorl === 'W' && 'c23' || colorl === 'X' && 'c24' ||
      colorl === 'Y' && 'c25' || colorl === 'Z' && 'c26' || colorl === '1' && 'c27' ||
      colorl === '2' && 'c28' || colorl === '3' && 'c29' || colorl === '4' && 'c30' ||
      colorl === '5' && 'c31' || colorl === 'c32' && 'c26' || colorl === '7' && 'c33' ||
      colorl === '8' && 'c34' || colorl === '9' && 'c35' ||

      color === 'A' && 'c1' || color === 'B' && 'c2' || color === 'C' && 'c3' ||
      color === 'D' && 'c4' || color === 'E' && 'c5' || color === 'F' && 'c6' ||
      color === 'G' && 'c7' || color === 'H' && 'c8' || color === 'I' && 'c9' ||
      color === 'J' && 'c10' || color === 'K' && 'c11' || color === 'L' && 'c12' ||
      color === 'M' && 'c13' || color === 'N' && 'c14' || color === 'O' && 'c15' ||
      color === 'P' && 'c16' || color === 'Q' && 'c17' || color === 'R' && 'c18' ||
      color === 'S' && 'c19' || color === 'T' && 'c20' || color === 'U' && 'c21' ||
      color === 'V' && 'c22' || color === 'W' && 'c23' || color === 'X' && 'c24' ||
      color === 'Y' && 'c25' || color === 'Z' && 'c26' 
    
    }>
      <span style={{marginLeft:'10px'}}>
            {el.tiendaOxxo}
      </span>

      <span className={!el.completed ? 'text-danger mx-2' : 'text-primary mx-2'}>
       {el.completed ? "✓" : "✘"} 
      </span> 

       {el.email?.slice(0, -10)}
    </div>
  );
};

export default list;


