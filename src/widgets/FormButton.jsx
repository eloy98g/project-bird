import React from 'react';

const FormButton = ({ name }) => {
  const handleButton = (elementId) => {
    const element = document.getElementById(elementId);
    if(element.classList.contains('selected')){
      element.classList.remove('selected');
    }else{
      element.classList.add('selected');
    }
  }

  return (
    <button 
      className='interest-button'
      type='button'
      id={name}
      onClick={() => handleButton(name)}
    >
      <p>{name}</p>
    </button>
  )
}

export default FormButton;
