<template>
  <div>
    index
    <br><br>
    <router-link to="/one">1. [beforeEach->next('/one')]<br>router-link: to="/one"</router-link>
    <br><br>
    <router-link to="/two">2. [beforeEach->next()]<br>router-link: to="/two"</router-link>
    <br><br>
    <a href="/one">3. [beforeEach->next('/one')]<br>just href or type in browser: /one</a>
  </div>
</template>

<script>
  export default {}
</script>

