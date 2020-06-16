import React from 'react'
import { mount } from 'cypress-react-unit-test'
import Index from "./index"

describe('HelloWorld component', () => {
  it('works', () => {
    mount(<Index/>)
    // now use standard Cypress commands
    cy.contains('Hello World!').should('be.visible')
  })
})
