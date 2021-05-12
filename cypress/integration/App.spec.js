describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('should update display when number buttons are pressed', () => {
    cy.get('#number3').click();
    cy.get('#number7').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '372')
  })
  it('should update the display with the correct result from multiply operator', () =>{
    cy.get('#number7').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '21')
  })

  it('should update the display with the correct result from the add operator', () =>{
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '10')
  })
  it('should update the display with the correct result from the subtract operator', () =>{
    cy.get('#number9').click();
    cy.get('#operator_subtract').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5')
  })
  it('should update the display with the correct result from the divide operator', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3')
  })
  it('should display the correct result from a chain of multiple operations', () => {
    cy.get('#number9').click()
    cy.get('#operator_multiply').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_divide').click();
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_subtract').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2')
  })
  it('should display the correct result for a negative calculation', () =>{
    cy.get('#number1').click()
    cy.get('#number0').click()
    cy.get('#operator_subtract').click();
    cy.get('#number1').click()
    cy.get('#number5').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-5')

  })

  it('should display the correct result from a calculation with large numbers', () =>{
    cy.get('#number1').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator_multiply').click();
    cy.get('#number1').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '100000000')

  })
  it('should display the correct result from a calculation with decimals', () =>{
  cy.get('#number5').click();
  cy.get('#operator_divide').click();
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '0.5')

})

})