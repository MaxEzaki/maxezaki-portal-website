<template>
  <header class="navbar">
    <section class="navbar-section"></section>
    <section class="navbar-center">
      <div class="logo"><img src="../assets/images/logo_max00.png"></div>
    </section>
    <section class="navbar-section"></section>
  </header>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  header{
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.2);
  }
  .logo{
    width: 40px;
    > img{
      width: 100%;
    }
  }
</style>