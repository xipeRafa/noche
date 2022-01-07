import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AuctionCard } from "./AuctionCard";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ItemSelected from "./ItemSelected";
import { useFirestore } from '../../hooks/useFirestore';
import List from "./List";
import "./picker.css";
import es from "date-fns/locale/es";

registerLocale("es", es);

export const AuctionBody = () => {
  const { currentUser } = useContext(AuthContext);

  const { docs } = useFirestore('auctions');
  let DB = docs

  const [itemState, setItemState] = useState();

  const handleState = (a) => {
    setItemState(a);
  };

  let admin = currentUser ? currentUser.email : false;
  let nop = '';
  let DBD;
  if (
    admin === "superadmin@gmail.com" ||
    admin === "test1@gmail.com" ||
    admin === "superadmin2@gmail.com" ||
    admin === "superadmin3@gmail.com" ||

    admin === "34@gmail.com" ||
    admin === "124@gmail.com" ||
    admin === "134@gmail.com" ||
    admin === "14@gmail.com" 
  ) {
    DBD = DB
    .filter(el => el.categorie === 'oxxo') 
    .sort((o1, o2) => o2.duration - o1.duration)
    .filter(el => el.completed === false)

    /* .sort((o1, o2) => o1.atendio === o2.atendio ? 0 : o2.atendio ? -1 : 1 ) ----sort por string */ 
  } else {
    DBD = [];
    nop = 'Usuario No Permitido, No Podras Ver la Informacion'
  }

  /* ===================================== filter Date ==================== */


  const [today2, setToday2] = useState();

  const [fecha, setFecha] = useState();
  const [arr, setArr] = useState([]);

  let l = arr.filter((el) => el).length;

  const onDate = (fecha) => {
    setFecha(fecha);

    let today = fecha?.getTime();
    let tomorrow = today + 86400000;

    let today2 = new Date(today).toLocaleDateString("es-CL", {
      weekday: "long", // narrow, short
      year: "numeric", // 2-digit
      month: "short", // numeric, 2-digit, narrow, long
      day: "numeric" // 2-digit
    });

    setToday2(today2);

    let ss = DB.filter(el => el.categorie === 'oxxo');

    let a = ss.map((el, i) => {
      if (el.duration > today && el.duration < tomorrow) {
        return el;
      }
    });
    setArr(a);
  };

  /* ===================================== filter Date END==================== */

  /* ===================================== filter Mail ==================== */

  const [mail, setMail] = useState();

  const handleMail = (e) => {
    setMail(e.target.value);
    setArrRadio([]);
  };

  const [n, setN] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    let sss = arr
      .filter((el) => el !== undefined)
      .map((el) => el.email === mail + "@gmail.com" && el);

    setN(sss);
  };

  /* ===================================== filter Mail END==================== */



  let arr4 = DBD
  

  if (arr.length > 0) {

      arr4 = arr.filter(el => el !== undefined)
    
  }

  const [bool, setBool]=useState(true)

  /* let tiendas = arr.map(el => el?.tiendaOxxo).sort().filter(el => el !== undefined) */


/* 
  let personasMap22 = arr.map((item) => {
    return [item?.tiendaOxxo, item];
  });
  let personasMapArr22 = new Map(personasMap22);

  let unicos = [...personasMapArr22.values()]

  console.log(unicos.filter(el => el !== undefined)) */
     

 

  




  return (
    <div className="container-fluid">

      {admin && (
        <div className="row bg-secondary pt-4 pb-3">
          <div className="text-white bg-primary mb-3 p-1 blue d-none">
            <span style={{ marginLeft: "20px" }}>
              <span className="p-1">{l}</span> Viajes el Dia: {today2} 
            </span>

            <span className={n?.length > 0 ? "mx-5" : "d-none"}>
              <span className="bg-danger p-1">
                {n?.filter((el) => el.completed === false).length}
              </span>{" "}
              Viajes Sin Completar de KL {mail}
            </span>
          </div>
          <div className="col-1"></div>
          <div
            className={ admin !== "superadmin@gmail.com" 
                        ? "d-none" : "col-md-3 text-center"}>
            <DatePicker
              selected={fecha}
              onChange={onDate}
              locale="es"
              className="pickers form-control w-100 mb-3 bg-secondary"
              dateFormat="dd 'de' MMMM 'de' yyyy"
            />
          </div>
          <div
            className={arr?.length > 0 ? "col-md-1 fs-2 row-back" : "d-none"}
            onClick={() => location.reload()}
          >
            🔙
          </div>

          <button className={ admin === "superadmin@gmail.com" 
                                ? "btn btn-primary d-none" : "btn btn-primary"}  

                  onClick={()=> setBool(!bool)}>

              {!bool ? 'Viajes Que Atendí' : 'Lista De Viajes Incompletos' }
          </button>

          <p className="text-danger fs-1 bg-white text-center">{nop}</p>

          <div className="col-md-3 text-center d-none">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleMail}
                value={mail}
                className={
                  arr.length > 0 ? "w-100 form-control mt-2" : "d-none"
                }
                style={{ width: "0" }}
                placeholder="Buscar por KL"
              />
            </form>
          </div>
      
        </div>
      )}

      {currentUser && (

        <div className={admin === "superadmin@gmail.com" ||
                        admin === "superadmin2@gmail.com" || 
                        admin === "superadmin3@gmail.com" ? 'd-none' :
         "row row-cols-1 row-cols-md-3 row-cols-lg-4 py-4 px-3 g-3 border mt-3 border border-secondary"}   
              style={{height:'500px', overflowY: 'scroll'}}>

          {bool 
            ?
            arr4?.filter((el) => el !== undefined)
                .filter(el => el.atendio === '')
                ?.map((doc) => {
                return (
                  <AuctionCard
                    item={doc}
                    key={doc.id}
                    handleState={handleState}
                  />
                );
              })
            : 
            arr4?.filter((el) => el !== undefined)
              .filter(el => el.atendio === currentUser.email)
              .slice(0, 40)
              ?.map((doc) => {
                return (
                  <AuctionCard
                    item={doc}
                    key={doc.id}
                    handleState={handleState}
                  />
                );
              })
          }  
        </div>
      )}

            <div className={admin !== "superadmin@gmail.com" ||
                            admin !== "superadmin2@gmail.com" || 
                            admin !== "superadmin3@gmail.com" && 'd-none'}>
                
                {  
                      arr.filter(el => el !== undefined)
                      .sort(function (o1,o2) {
                        if (o1.tiendaOxxo > o2.tiendaOxxo) { //comparación lexicogŕafica
                          return 1;
                        } else if (o1.tiendaOxxo < o2.tiendaOxxo) {
                          return -1;
                        } 
                        return 0;
                      })
                      .map((el, index) => (
                          <List el={el} index={index} key={index}/>
                      ))     
                }
              
            </div>

      {currentUser && (
        <div className={admin === "superadmin@gmail.com" || 
                        admin === "superadmin2@gmail.com" ||
                        admin === "superadmin3@gmail.com" ? 'd-none': 'border'}>
          <ItemSelected itemState={itemState} />
        </div>
      )}
    </div>
  );
};
