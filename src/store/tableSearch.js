import axios from 'axios';

function _filterUsers(users, filter) {
  let _arr = [];
  users.forEach(user => {
    if (
      user.username.toLowerCase().includes(filter) ||
      user.email.toLowerCase().includes(filter)
    ) {
      _arr.push(user);
    }
  });
  return _arr;
}

const tableSearch = {
  namespaced: true,
  state: {
    users: {},
    filter: '',
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
      //console.log(state.users);
    },
    CHANGE_FILTER(state, payload) {
      state.filter = payload;
      //console.log(state.filter);
    },
  },
  getters: {
    changeUsers(state) {
      if (state.users.length) {
        return _filterUsers(state.users, state.filter);
      }
    },
  },
  actions: {
    setTable(context) {
      axios
        .get('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
        .then(response => context.commit('SET_USERS', response.data));
    },
  },
};
export default tableSearch;
