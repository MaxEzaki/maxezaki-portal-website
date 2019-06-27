<template>
  <header class="navbar">
    <section class="navbar-section">
      <a href="#" class="btn btn-link">Docs</a>
      <a href="#" class="btn btn-link">Examples</a>
    </section>
    <section class="navbar-center">
      <!-- <div class="s-rounded"><img src="../assets/images/logo_max00.png"></div> -->
      maxezaki.com
    </section>
    <section class="navbar-section">
      <a href="#" class="btn btn-link">Twitter</a>
      <a href="#" class="btn btn-link">GitHub</a>
    </section>
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
