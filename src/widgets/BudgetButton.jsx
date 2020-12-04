import React from 'react';
import '../styles/components/ContactForm.scss';
import FormButtom from './FormButton';

const BudgetButton = () => {
  return (
    <div className="budget-button">
      <FormButtom name='3k' properties='budget-item 1' />
      <FormButtom name='5k' properties='budget-item 2' />
      <FormButtom name='10k' properties='budget-item 3' />
      <FormButtom name='20k' properties='budget-item 4' />
      <FormButtom name='40k' properties='budget-item 5' />
      <FormButtom name='60k' properties='budget-item 6' />
      <FormButtom name='más &#x1F4B0;' properties='budget-item 7' />
    </div>
  )
}

export default BudgetButton
