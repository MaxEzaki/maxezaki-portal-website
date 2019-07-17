<template>
  <div id="app">
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Home from '@/views/Home.vue'

  export default {
    name: 'app',
    components: {
      Home,
      Header,
      Footer
    },
    data() {
      return {

      }
    },
  }

</script>

<style lang="scss">
#app{
      display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.wrapper{
	margin: 150px auto 20px;
}

html {
  height: 100%;
}
body {
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}

</style>
