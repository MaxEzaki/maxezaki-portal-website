<template>
  <div id="app">
    <section class="section section-header bg-gray">
      <section class="grid-header container grid-960 text-center">
        <p>maxezaki.com</p>
      </section>
    </section>
    <div class="col-5 col-xs-11 wrapper">
      <div class="panel">
        <div class="panel-header text-center">
          <figure class="avatar avatar-lg"><img src="images/icon_max00.jpg"></figure>
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
            <a href="https://www.pakutaso.com/Max_Ezaki.html">#stockphotomodel</a> <a>#webengineer</a> <a>#mc</a> <a href="https://www.pakutaso.com/search.html?offset=0&limit=30&search=%E3%83%89%E3%82%A4%E3%83%84%E4%BA%BA%E3%83%8F%E3%83%BC%E3%83%95">#現役ドイツ人ハーフ</a> <a href="https://www.pakutaso.com/">#ぱくたそ</a> <a href="#">#japnese</a> <a href="#">#english</a> <a href="#">#german</a>
          </p>
          <div class="text-center">
          <button class="btn btn-primary" @click="openLink('https://form.jotform.me/Max_Ezaki/contact')"><i class="fa fa-envelope"></i> Contact</button>
          </div>
        </div>
        <div class="panel-footer">
        </div>
      </div>
    </div>
    <footer class="bg-gray footer">
      <section class="grid-footer container grid-960">
          <div class="columns">
            <div class="column text-center"><a href="https://www.facebook.com/rhythmonchi/"><span class="icon"><i class="fa fa-facebook" aria-hidden="true"></i></span></a></div>
            <div class="column text-center"><a href="https://twitter.com/Max_Ezaki"><span class="icon"><i class="fa fa-twitter" aria-hidden="true"></i></span></a></div>
            <div class="column text-center"><a href="http://maxezaki.photo"><span class="icon"><i class="fa fa-tumblr" aria-hidden="true"></i></span></a></div>
            <div class="column text-center"><a href="https:/rhythm-onchi.com"><span class="icon"><i class="fa fa-wordpress" aria-hidden="true"></i></span></a></div>
          </div>
      </section>
    </footer>
  </div>
</template>

<script>
  // import QAForm from '@/components/QAForm.vue'
  export default {
    name: 'app',
    data() {
      return {

      }
    },
    methods: {
      openLink(url){
        window.open = url;
      }
    }

</script>

<style lang="scss">
.layout-logo{
  margin: 0 auto;
  width: 50px;
  height: 50px;
  margin-top: 10px;
}
.layout-logo img{
  width: 100%;
}

  .ivu-card-bordered{
    margin: 0 auto
  }
  .is-center{
    text-align: center
  }
  .footer{
      // position: fixed;
      // bottom: 0;
      // width: 100%;
  }
  .content{
    width: 100vw;
    height: calc(100vh - 135px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1;
  }

html {
  height: 100%;
}
body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>
