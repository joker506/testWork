<template>
  <div id="app">
    <Search />
    <TableSearch />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import TableSearch from "./components/TableSearch";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Search,
    TableSearch,
  },
  methods: {
    ...mapActions({
      sets: "tableSearch/setTable",
    }),
  },
  mounted() {
    this.sets();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
