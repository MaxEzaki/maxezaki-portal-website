<template>
  <div id="app">
    <Layout>
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <div class="layout-logo">
          <img src="./assets/img/icon_max.png" alt="ロゴ">
          <!-- <img :src="imgPathLogo" alt="ロゴ"> -->
        </div>
      </Header>
        <Content class="content">
          <Card class="content_card" style="width: 614px">
            <div class="is-center">
              <img src="/assets/img/img_max.jpg">
              <h3>Hi, this is Max_Ezaki.  Feel free to contact me :)</h3>
            </div>
            <Button @click="modalContact = true">Contact</Button>
              <Modal
                  title="Contact"
                  v-model="modalContact"
                  class-name="vertical-center-modal" footer-hide>
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
              </Modal>
          </Card>
        </Content>

      <Footer class="layout-footer-center is-center footer">2011-2016 &copy; Max_Ezaki </Footer>

    </Layout>
  </div>
</template>

<script>
  // import MyHeader from "./components/MyHeader.vue"
  // import Content from "./components/Content.vue"
  // import Footer from "./components/Footer.vue"
  export default {
    name: 'app',
    components:{
      // MyHeader:"MyHeader",
      // Content:"Content",
      // Footer:"Footer"
    },
    data() {
      return {
        currentYear: new Date(),
        modal9: false,
        modalContact: false,
        imgPathLogo: require('./assets/img/icon_max.png'),
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

      };
    },
    methods:{
      handleSubmit (name) {
        console.log(this);
          this.$refs[name].validate((valid) => {
              if (valid) {
                  this.$Message.success('Success!');
              } else {
                  this.$Message.error('Fail!');
              }
          })
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
