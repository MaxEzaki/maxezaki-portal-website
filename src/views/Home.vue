<template>  
  <div class="col-5 col-xs-11 wrapper">
    <div class="panel">
      <div class="panel-header text-center">
        <figure class="avatar avatar-lg"><img src="../assets/images/icon_max00.jpg"></figure>
        <div class="panel-title mt-10">Max_Ezaki</div>
      </div>
      <div class="panel-nav">
        <ul class="tab tab-block">
        <li class="tab-item active">
          <a href="#">Profile</a>
        </li>
      </ul>
      </div>
      <div class="panel-body">
        <p>Hi, this is Max Ezaki. Feel free to contact me :)<br>
          <a href="https://www.pakutaso.com/Max_Ezaki.html">#stockphotomodel</a> <a>#webengineer</a> <a> #mc</a> <a href="https://www.pakutaso.com/search.html?offset=0&limit=30&search=%E3%83%89%E3%82%A4%E3%83%84%E4%BA%BA%E3%83%8F%E3%83%BC%E3%83%95"> #現役ドイツ人ハーフ</a> <a href="https://www.pakutaso.com/"> #ぱくたそ</a> <a href="#"> #japanese</a> <a href="#"> #english</a> <a href="#"> #german</a>
        </p>
        <div class="text-center">
        <button class="btn btn-primary" @click="openLink('https://form.jotform.me/Max_Ezaki/contact')"><i class="fa fa-envelope"></i> Contact</button>
        </div>
      </div>
      <div class="panel-footer">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    openLink(url){
      window.open(url);
    }
  }
}
</script>
