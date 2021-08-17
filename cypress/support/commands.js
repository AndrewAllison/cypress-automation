const authUrl = process.env.AUTH_URL;

Cypress.Commands.add('loginWithApi', (username, password) => {
  cy.log('Login Attempt');
  cy.request(
    {
      url: `${authUrl}/auth/v2/login`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: {
        email: username,
        password: password
      },
      redirect: 'follow'
    }
  ).then(({body}) => {
    const { code, uic } = body;
    cy.request(
      {
        url: `${authUrl}/auth/token`,
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: {
          code,
          uic
        },
        redirect: 'follow'
      }
    ).then(({body}) => {
      const { accessToken } = body;
      window.localStorage.setItem('auth-token', accessToken)
    });
  });
});

Cypress.Commands.add('assignCentreContext', () => {
  const body = {
    "userId": "310fc39e-2948-4b5b-966b-60dcf467dc1b",
    "clientId": "447d8c7b-a767-4796-a2d5-4b57e7bc5971",
    "centreId": "125792d8-ad96-4309-b532-b5d89f54f6f5"
  }
});
