/* import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; */


const ItemSelected = ({
  itemState = {
    title: "Inicia sesión",
    imgUrl:
      "https://image.shutterstock.com/image-photo/indifferent-puzzled-female-shruggs-shoulders-600w-1164353026.jpg"
  }
}) => {

  /* const { noteContext } = useContext(AuthContext); */

  let title = itemState.title;
  let seconds = itemState.duration
  let email = itemState.email


  const hora = new Date(seconds).toLocaleTimeString(
    "es-CL"
  ); /* hora, min, sec */

  let date = new Date(seconds).toLocaleDateString("es-CL", {
    weekday: "long", // narrow, short
    year: "numeric", // 2-digit
    month: "short", // numeric, 2-digit, narrow, long
    day: "numeric" // 2-digit
  });


/*   const[note, setNote]=useState()

  const handlerNote =(e)=>{
    setNote(e.target.value)
  }

  const handlerSub =(e)=>{
    e.preventDefault()

    noteContext(itemState.id, note)  
    itemState.note=note
    setNote('')
  } */

  /* const handlerEdit =()=>{
    setNote(itemState.note)
  } */


  return (
    <div className="m-3 pb-5">

      <div className="bg-dark text-white p-2 text-center">
         Datos
      </div>

      <div className="card pb-0" style={{backgroundColor:'rgb(230,230,230)'}}>

        {title !== "Inicia sesión" && (
          <div className="card-body">
          {/*   <p className="lead display-6 pl-2">
              <span className="text-secondary">KL: </span> {itemState.title}
            </p> */}
              <h5>
                <span className="text-secondary">KL: </span> {email.slice(0, -10)}
              </h5>
             {/*  <h5>
              <span className="text-secondary">Unidad: </span> {itemState.title}
              </h5> */}
            <h5>
              <span className="text-secondary">Oxxo: </span> {itemState.tiendaOxxo}
            </h5>
            <h5>
              <span className="text-secondary">Fecha: </span> {date}, {hora}
            </h5>
            <h5 className="card-text">
              <span className="text-secondary">Comentarios: </span>{" "}
              {itemState.description}
            </h5>

            <h5 className={itemState.note !== undefined ?"card-text" : "d-none" }>
              <span className="text-secondary">Nota: </span>{" "}
              {itemState.note}
            </h5>

          </div>
        )}

{/* {title !== "Inicia sesión" && (
        <div className={itemState.completed ? 'd-none' : 'p-3'}>

          <form onSubmit={handlerSub} className='d-flex'>
            <input  type="text" className='form-control me-2' 
                    onChange={handlerNote} 
                    placeholder='Escribir Nota' value={note} />
            
            <input type="button" 
                   className={itemState.note !== undefined ?"btn btn-primary me-1 text-white" : "d-none" }
                   value='Editar' 
                   onClick={handlerEdit} />

            <input  type="submit" 
                    value={itemState.note !== undefined ? "Guardar" : 'Crear Nota' }
                    className="btn btn-primary text-white"
                    disabled={note?.length > 1 ? false : true}/>
          </form>

        </div>
)} */}
        
      </div>
    
    </div>
  );
};

export default ItemSelected;
