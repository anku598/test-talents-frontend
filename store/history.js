import { defineStore } from 'pinia';

export const useHistoryStore = defineStore('history', {
  state: () => ({
    historyData: [],
  }),

  actions: {
    async fetchData() {
      const response = await fetch('/dummyData.json');
      const data = await response.json();
      this.historyData = data;
    },
  },
})