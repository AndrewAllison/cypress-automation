
describe('select options', () => {
  beforeEach(() => {
    cy.loginWithApi(process.env.AUTH_SBE_USERNAME, process.env.AUTH_SBE_PASSWORD);
    cy.assignCentreContext();
    cy.visit(process.env.SITE_URL);
  });
  
  it('displays', () => {
    cy.get('.organisation-selector-control button[title*=Open]').click();
    cy.get('#organisation-selector-option-0').click();
    
    cy.get('.centre-selector-control button[title=Open]').click();
    cy.get('#centre-selector-option-1').click();
    
    cy.get('.MuiButton-label').click();
    cy.get('#centre-selector-form').submit();
  });
});
