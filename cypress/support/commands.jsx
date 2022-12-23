// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Support File: support.jsx
import { createVuetify } from 'vuetify';
import vuetify from '@/plugins/vuetify';
import i18n from '@/plugins/i18n'; // You want whatever you'd pass into Vue.use

import { mount as cypressMount } from 'cypress/vue'

Cypress.Commands.add('mount', (component, overrides = {}) => {
  const mountOptions = {
    /* Anything you'd normally do in Vue Test Utils to setup your component */
    plugins: [ vuetify, i18n ],

    ...overrides // you'll wanna break this out to make it easier to override certain plugin settings (like Vuex)
  }

  return cypressMount(() => (<VApp>
    <div>
      <component is={component}/>
    </div>
  </VApp>), mountOptions)
})
