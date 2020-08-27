import Vue from 'vue';
import Vuex from 'vuex';

import tableSearch from '@/store/tableSearch';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tableSearch,
  },
});
