<template>
  <div class="wrap">
    <NavBar />
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import { useStore } from "vuex";
export default {
  components: { NavBar },
  setup() {
    const store = useStore();
    store.dispatch("fetchNewList");
  },
};
</script>
<style>
.wrap {
  margin-top: 70px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
