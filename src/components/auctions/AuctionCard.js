import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";

export const AuctionCard = ({ item, handleState}) => {
  const { currentUser, atender, bidAuction } = useContext(AuthContext);

  let seconds = item.duration
  let completed = item.completed

const hora = new Date(seconds).toLocaleTimeString("es-CL")

let date = new Date(seconds).toLocaleDateString("es-CL", {
      weekday: "short", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric", // 2-digit
}); 

const handlerButton =()=>{
    bidAuction(item.id, currentUser.email )
    handleState(item)
}

const handlerInfo =()=>{
  handleState(item)
  window.scrollTo(0,document.body.scrollHeight, {behavior: 'smooth'})
}

const handlerAtender =()=>{
  atender(item.id, currentUser.email )
}


  return (
    <div className="col">
        {currentUser && (
      <div className="card shadow-sm"  onClick={handlerInfo}>
       
        <div className="card-body p-4">
        <div className="d-flex jsutify-content-between align-item-center">
            <h5>
             {item.tiendaOxxo}
            </h5>
          </div>

          <p className="h5">
            <span className="text-secondary">KL </span> {item.email?.slice(0, -10)}{' '}
           {/*  {item.latitude !== 'no-gps' ?
                 <a style={{textDecoration:'none'}} 
                 href={`https://www.google.com/maps/@${item.latitude},${item.longitude},19z`}
                 target='_blank'>Ubicacion GPS</a> : ''
            } */}
          </p>
          
          
          <div>
            <p>{date}, {hora.slice(0, -3)}</p>
          </div>
          {/* <p className="card-text">{item?.description?.slice(0, 20)}...</p> */}
          <p>Atendido Por: {item.atendio?.slice(0, -10)}</p>
          
          <div className="d-flex justify-content-between align-item-center">
           
              <Button className={completed ? "btn btn-primary" 
                                           : item.monitor 
                                           ? "btn btn-success " 
                                           : "btn btn-danger "}
                      onClick={handlerButton} 
                      disabled={currentUser.email === item.atendio ? false : true } >

                {completed ? "Completado" : item.monitor ? 'Atendido ✓' : 'Sin completar ✘'}
              </Button>

              <Button className={item.atendio ? "d-none" : "btn btn-primary"}
                      onClick={handlerAtender} >

                 Atender
              </Button>
          
          </div>
        </div>
      
      </div>
        )}
    </div>
  );
};
