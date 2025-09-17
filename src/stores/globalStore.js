import { defineStore, acceptHMRUpdate } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    showProfileNameInHeader: false,
  }),

  getters: { },

  actions: { }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
