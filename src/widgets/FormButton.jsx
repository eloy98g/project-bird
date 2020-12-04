import React from 'react';

const FormButton = ({ name, properties }) => {
  const classes = `interest-button ${properties}`;
  const handleButton = (elementId) => {
    const element = document.getElementById(elementId);
    if(!element.classList.contains('buget-item')){
      if(element.classList.contains('selected')){
        element.classList.remove('selected');
      }else{
        element.classList.add('selected');
      }
    }else if(element.classList.contains('selected')){
        element.classList.remove('selected');
      }else{
        element.classList.add('selected');
      }
  }

  return (
    <button 
      className={classes}
      type='button'
      id={name}
      onClick={() => handleButton(name)}
    >
      <p>{name}</p>
    </button>
  )
}

export default FormButton;
