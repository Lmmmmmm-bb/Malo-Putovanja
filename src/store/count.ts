import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('count', {
  state: () => {
    const count = ref(0);
    return {
      count
    };
  },
  getters: {
    double: ({ count }) => count * 2
  }
});
