<template>
  <div class="table__wrap">
    <div class="table__sort">
      <span>Сортировка:</span>
      <span @click="sortDate">Дата регистрации</span>
      <span @click="sortRate">Рейтинг</span>
    </div>
    <div class="table__header">
      <p class="table__item">Имя пользователя</p>
      <p class="table__item">E-mail</p>
      <p class="table__item">Дата регистрации</p>
      <p class="table__item">Рейтинг пользователя</p>
    </div>
    <div class="table__main" v-for="user in usersFromGetter " :key="user.id">
      <p class="table__item">{{ user.username }}</p>
      <p class="table__item">{{ user.email }}</p>
      <p class="table__item">{{ dateConvert(user.registration_date)}}</p>
      <p class="table__item">{{ user.rating }}</p>
      <button class="btn">X</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "TableSearch",
  data() {
    return {
      desc: true,
      toggleRegitrate: true,
      users: null,
    };
  },
  methods: {
    sortDate() {
      let toggleRegitrate = this.toggleRegitrate;
      this.usersFromVuex.sort(function (a, b) {
        if (toggleRegitrate) {
          return b.registration_date.localeCompare(a.registration_date);
        } else {
          return a.registration_date.localeCompare(b.registration_date);
        }
      });
      this.toggleRegitrate = !this.toggleRegitrate;
    },
    sortRate() {
      let desc = this.desc;
      this.usersFromVuex.sort(function (a, b) {
        return desc ? b.rating - a.rating : a.rating - b.rating;
      });
      this.desc = !this.desc;
    },
    dateConvert(str) {
      let _date = new Date(str);
      return _date.toLocaleDateString("ru-RU");
    },
  },

  computed: {
    ...mapState({
      usersFromVuex: (state) => state.tableSearch.users,
    }),
    ...mapGetters({
      usersFromGetter: "tableSearch/changeUsers",
    }),
  },
};
</script>

<style scoped>
.table__wrap {
  max-width: 900px;
  margin: 0 auto;
}

.table__sort {
  display: flex;
  justify-content: space-around;
  width: 300px;
  cursor: pointer;
}
.table__header,
.table__main {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
}
.table__item {
  flex-basis: 25%;
  text-align: center;
}
.btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
