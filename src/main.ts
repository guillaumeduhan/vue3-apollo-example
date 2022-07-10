import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import ApolloClient from './apollo/client'
import App from './App.vue'

createApp({
  setup() {
    provide(DefaultApolloClient, ApolloClient)
  },

  render: () => h(App),
}).mount('#app')
