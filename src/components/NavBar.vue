<template>
  <header class="header">
    <router-link to="/" class="logo">Home</router-link>
    <nav>
      <router-link to="/about">1</router-link>
      <router-link to="/about">2</router-link>
      <router-link to="/about">3</router-link>
      <router-link to="/about">4</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  height: 70px;
  position: fixed;
  left: 0;
  top: 0;
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 9999;
}
.logo {
  display: block;
  font-size: 0;
  background: url("../assets/logo.png");
  background-size: cover;
  width: 70px;
}
nav {
  width: 70%;
  display: flex;
  justify-content: space-between;
}
nav a {
  color: #fff;
  font-size: 18px;
}
</style>
