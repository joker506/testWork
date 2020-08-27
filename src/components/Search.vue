<template>
  <div class="search">
    <h2 class="search__title">Список пользователей</h2>
    <div class="search__wrap">
      <label for="users"></label>
      <input
        class="search__input"
        type="text"
        v-model="searchItems"
        placeholder="Поиск по имени или email"
        @input="searchText"
      />
      <button class="search__btn" @click="clearFilter">Очистить фильтр</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchItems: null,
    };
  },
  methods: {
    searchText() {
      this.$store.commit("tableSearch/CHANGE_FILTER", this.searchItems);
    },
    clearFilter() {
      this.searchItems = null;
    },
  },
};
</script>

<style >
.search {
  max-width: 900px;
  margin: 0 auto;
}
.search__input {
  width: 300px;
  padding: 5px;
  margin-bottom: 10px;
}
.search__wrap {
  display: flex;
  background-color: #fff;
  flex-direction: column;
  margin-bottom: 10px;
}
.search__btn {
  width: 200px;
  cursor: pointer;
}
</style>
