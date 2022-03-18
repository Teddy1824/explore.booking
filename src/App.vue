<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view/>
</template>

<script>
import Navbar from "./components/Navbar.vue"
export default {
  name: "nav",
  components: {
    Navbar
  }
}
</script>

<style>

</style>
