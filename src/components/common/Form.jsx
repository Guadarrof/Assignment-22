import React from "react";
import InputGroup from "./InputGroup";
import Button from "./Button";
import { useState } from "react";
import Message from "./Message";

function Form() {
  const [name, setName] = useState('');
  const [age, setAge]= useState(0);
  const [messageWelcome, setMessageWelcome] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [ageErrorMessage, setAgeErrorMessage] = useState('');

  function showMessage(){
    let valid =true;
    setMessageWelcome('');
    setNameErrorMessage('');
    setAgeErrorMessage('');
    console.log(name)
    if (name.trim() === '') {
      setNameErrorMessage('Por favor ingresa un nombre.');
      valid = false;
      return;
    }else{
      setNameErrorMessage('');
    }
    if (isNaN(age) || age <= 0) {
      setAgeErrorMessage('Por favor ingresa tu edad.');
      valid=false;
      return;
    }else{
      setAgeErrorMessage('');
    }
    if(valid){
      if(age<18){
        setMessageWelcome(`Hola ${name}, para usar esta pagina debes ser mayor de edad`);
      }else{
        setMessageWelcome(`Hola ${name}, gracias por usar nuestra pagina`);
      }
    }
  }

  return (
    <>
    <form className="form">
      <InputGroup
        text="Full Name"
        type="text"
        className="input_form"
        id="nameInput"
        onChange={(e) => {
          setName(e.target.value)}}
        errorMsge= {nameErrorMessage}
      />
      <InputGroup
        text="Age"
        type="number"
        className="input_form"
        id="ageInput"
        onChange={(e) => {
          setAge(parseInt(e.target.value))
        }}
        errorMsge= {ageErrorMessage}
      />
    </form>
    <Button text='Save' className="btn_form" onClick={showMessage} />
    <Message message={messageWelcome} display={messageWelcome ? 'block' : 'none'}/>
  </>)
}

export default Form