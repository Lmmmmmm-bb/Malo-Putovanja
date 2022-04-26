import { createPinia, acceptHMRUpdate } from 'pinia';
import { useCounterStore } from './count';

const pinia = createPinia();
const stores = [useCounterStore];

const metaHot = import.meta.hot;
metaHot &&
  stores.forEach((store) => metaHot.accept(acceptHMRUpdate(store, metaHot)));

export * from './count';

export default pinia;
