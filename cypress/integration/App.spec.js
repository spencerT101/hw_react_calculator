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
  it('should update the display with the multiply operator', () =>{
    cy.get('#number7').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '21')
  })

  it('should update the display with the add arithmetical operator', () =>{
    cy.get('#number7').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '10')
  })

})