import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
    
  })
  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    const buttonadd = container.getByTestId('add')
    const button4 = container.getByTestId('number4');
    const buttonEquals =container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1)
    fireEvent.click(buttonadd)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)
    expect(runningTotal).toHaveTextContent('5')
  })
  it("should subtract 4 from 7 ", () => {
    const button7 = container.getByTestId('number7'); 
    const buttonSubtract = container.getByTestId('subtract');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)
    expect(runningTotal).toHaveTextContent('3')
   });
})

