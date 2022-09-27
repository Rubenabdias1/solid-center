import { createMachine, interpret } from 'xstate';

export const appMachine = createMachine({
  id: 'App Machine',
  initial: 'loggedOut',

  states: {
    loggedOut: {
      on: {
        LOGIN: {
          target: 'loggedIn',
        },
      },
    },
    loggedIn: {
      initial: 'homePage',
      states: {
        homePage: {
          on: {
            SELECT_CATEGORY: {
              target: 'selectingCategory',
            },
          },
        },
        selectingCategory: {
          on: {
            BACK: {
              target: 'homePage',
            },
            SELECT_PRODUCT: {
              target: 'selectingProduct',
            },
          },
        },
        selectingProduct: {
          on: {
            BACK: {
              target: 'selectingCategory',
            },
            ADD_PRODUCT: {
              target: 'cartPage',
            },
          },
        },
        cartPage: {
          on: {
            BACK: {
              target: 'selectingCategory',
            },
            CREATE_ORDER: {
              target: 'checkingOut',
            },
          },
        },
        checkingOut: {
          on: {
            BACK: {
              target: 'cartPage',
            },
            CHECKOUT: {
              target: 'homePage',
            },
          },
        },
      },
      on: {
        LOG_OUT: {
          target: 'loggedOut',
        },
      },
    },
  },
});

export const appService = interpret(appMachine);
