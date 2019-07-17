<template>
  <footer class="bg-gray footer">
    <section class="grid-footer">
      <div class="columns">
        <div class="column text-center">
          <a href="https://www.facebook.com/rhythmonchi/"><span class="icon"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/></span></a>
        </div>
        <div class="column text-center">
          <a href="https://twitter.com/Max_Ezaki"><span class="icon"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/></span></a>
        </div>
        <div class="column text-center">
          <a href="http://maxezaki.photo"><span class="icon"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'tumblr' }"/></i></span></a>
        </div>
        <div class="column text-center">
          <a href="https:/rhythm-onchi.com"><span class="icon"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'wordpress' }"/></span></a>
        </div>
      </div>
    </section>
  </footer>
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
.footer {
  grid-row-start: 2;
  grid-row-end: 3;
  margin-top: auto;
   > section{
    margin-left: auto;
    margin-right: auto;
    padding-left: .4rem;
    padding-right: .4rem;
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
}
</style>>
