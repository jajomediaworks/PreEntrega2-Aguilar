import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";


function HomePage(params) {
    return (
        <>
    <div classNameName="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="d-flex flex-column title-banner">
                {/* <h2 className="text-white">World-classNameName Men's Haircuts since 2.017</h2> <br /> */}
                <h1 className="display-1 text-yellow">LA BARBERIA <br /> CLASICA</h1>
                {/* <div className="border-h"></div>
                <p>Agenda tu cita, relájate y disfruta la experiencia que te mereces </p> */}
              </div>
            </div>
          </div>
    </div>
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                <div className="box-body text-center">
                    {/* <h1 className="my-4">BARBER SHOP</h1>
                    <p>Nuestros Servicios</p> */}
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1592647420148-bfcc177e2117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1439&q=80" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                  <h5 className="card-title">Barba Express</h5>
                                  <p>Perfilado con patillera y tijeras. *Restricciones: sin ritual de toallas, sin mezcla de aceites, sin masaje relajante, sin bebida.</p>
                                </div>
                              </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1590540179852-2110a54f813a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                  <h5 className="card-title">Barba Lord</h5>
                                  <p>Perfilado con patillera y tijeras. *Restricciones: sin ritual de toallas, sin mezcla de aceites, sin masaje relajante, sin bebida.</p>
                                </div>
                              </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                  <h5 className="card-title">Barba Lord Superior</h5>
                                  <p>Corte y mantenimiento de a barba, para siempre estar impecable, incluye ritual de toallas en frío y en caliente, masaje capilar, aromaterapia, </p>
                                </div>
                              </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  </div>
    
            <ItemListContainer />
        </>
    )
    
}


export default HomePage