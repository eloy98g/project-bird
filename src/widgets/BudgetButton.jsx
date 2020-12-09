import React from 'react';
import '../styles/components/ContactForm.scss';

const BudgetButton = () => {
  const items = ['3k', '5k', '10k', '20k', '40k', '60k', 'más']; // icon: &#x1F4B0;
  const spans = [0, 1, 2 ,3, 4, 5];
  let first = null; 
  let second = null;
  
  const setBackground = () => {
    let firstButton = null;
    let secondButton = null;
    let aux;
    // getting indexes
    for(let i = 0; i<items.length; i +=1){
      if(first === items[i]){
        firstButton = i;
      }
      if(second === items[i]){
        secondButton = i;
      }
    }
    console.log(`[NO ORD]firstButton: ${firstButton} -- secondButton: ${secondButton}`)
    if(firstButton > secondButton){
      aux = firstButton;
      firstButton = secondButton;
      secondButton = aux;
    }
    // for(let i = 0; i<spans.length; i +=1){
    //   if()
    // }

    console.log(`[ORDENA]firstButton: ${firstButton} -- secondButton: ${secondButton}`);
  }

  const handleButton = (elementId) => {
    const element = document.getElementById(elementId);

    if(element.classList.contains('selected')){
      element.classList.remove('selected');
      if(elementId === first){
        first = second;
        second = null;
      }
      else if(elementId === second){
        second = null;
      }
    }
    else {
      element.classList.add('selected');
      if(first === null){
        first = elementId;
      }else if(second === null){
        second = elementId;
      }else{
        document.getElementById(first).classList.remove('selected');
        first = second;
        second = elementId;
      }
    }
    // if(first !== null && second !== null){
    //   setBackground();
    // }

    console.log(`First: ${first} :: Second: ${second}`);
  }
  
  const BudgetSpan = () => {
    return (
      <div className="budget-span" />
    )
  }

  const BudgetItem = ( name ) => {
    return (
      <button 
        className='interest-button budget-item'
        type='button'
        id={name}
        onClick={() => handleButton(name)}
      >
        <p>{name}</p>
      </button>
    )
  }

  return (
    <div className="budget-buttons">
      {items.map(item => (
        BudgetItem(item)
      ))}
      <div className="budget-span__container">
        {spans.map(item => (
            BudgetSpan(item)
        ))}
      </div>
    </div>
  )
}

export default BudgetButton;
