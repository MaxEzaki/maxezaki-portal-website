<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

<!-- <QAForm /> -->

<!--   <form
    name="ask-qa-panel"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="ask-team-vue" />
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        :value="panelist"
        :checked="panelist === defaultPanelist"
      />
      <span>{{ panelist }}</span>
    </label>

  <p>
    <button type="submit">Send</button>
  </p>

  </form>
 -->
<form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>


    <!-- <router-view/> -->
  </div>
</template>

<script>
  // import QAForm from '@/components/QAForm.vue'
  export default {
    name: 'app',
    data() {
      return {

      panelists: ['Evan You', 'Chris Fritz'],
      defaultPanelist: 'Evan You',

        formContact: {
            name: '',
            email: '',
            desc: ''
        },

        ruleValidate: {
            name: [
                { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            ],
            email: [
                { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
            ],
            desc: [
                { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
            ]
        }

      }
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
