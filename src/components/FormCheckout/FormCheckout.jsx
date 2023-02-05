import React, { useState } from "react";




function InputForm(props) {
  
  return (

    <div className="col-md-12 col-lg-4">
        <label className="form-label" >{props.label}</label>
        <input className="form-control"
          value={props.value}
          name={props.name}
          type="text"
          onChange={props.onChange}
          />
    </div>

    );
  }
  
  export default function FormCheckout(props) {

    const [userData, setUserData] = useState({
      Name: "",
      Phone: "",
      Email: "",
    });
    
    let fieldsForm = Object.keys(userData);
  
    function onInputChange(evt) {
      let value = evt.target.value;
      let inputName = evt.target.name;
  
      let newState = { ...userData };
      // dynamic props
      newState[inputName] = value;
      setUserData(newState);
    }
  
    function onSubmit(event) {
      event.preventDefault();

      console.log(`Gracias por tu compra!`);
    }
  
    function formIsInvalid() {
      return !( userData.name !== "" && userData.phone !== "" && userData.email !== "")
    }
  
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center mb-5">Llena tus datos para finalizar la compra</h2>
          {fieldsForm.map((field) => (
              <InputForm  value={userData[field]}   name={field} onChange={onInputChange} label={field} userData={userData} />
            ))}
        </div>
      <form onSubmit={onSubmit}>
  
        <div className="text-center p-3 mt-3">
          
            {/* <Button onClick={props.handleCheckout}>Finalizar Compra</Button> */}
            <button className="btn-edit me-4" onClick={ (event) => props.onCheckout(event, userData)} disabled={formIsInvalid()} type="submit">
              Crear orden
            </button>
            <button className="btn-edit" onClick={() => setUserData({ name: "", email: "", phone: "" })}>
              Limpiar
            </button>
        </div>
      </form>
      </div>
    );
  }