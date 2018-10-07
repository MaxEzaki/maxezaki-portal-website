<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

<Form ref="formContact" :model="formContact" label-position="top" :rules="ruleValidate" name="contact" netlify>
                    <FormItem label="Name" prop="name">
                      <Input v-model="formContact.name" placeholder="Enter your name" name="name"></Input>
                    </FormItem>
                    <FormItem label="Email" prop="email">
                      <Input v-model="formContact.email" placeholder="Enter your email" name="email"></Input>
                    </FormItem>
                    <FormItem label="Desc" prop="desc">
                        <Input v-model="formContact.desc" type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formContact')">Submit</Button>
                    </FormItem>

                    <p>
                      <button type="submit">Send</button>
                    </p>
                  </Form>


    <!-- <router-view/> -->
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
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
