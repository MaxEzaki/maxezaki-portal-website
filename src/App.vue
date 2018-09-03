<template>
  <div id="app">
    <Layout>
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>
                        Item 4
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Content class="content">
          <Card class="content_card" style="width: 614px">
            <div class="is-center">
              <img src="/assets/img/icon.jpg">
              <h3>Hi, this is Max_Ezaki.</h3>
            </div>
            <Button @click="modal10 = true">Contact</Button>
              <Modal
                  title="Contact"
                  v-model="modal10"
                  class-name="vertical-center-modal" footer-hide>
                  <Form :model="formContact" label-position="top" :rules="ruleValidate" name="contact" netlify>
                    <FormItem label="Name" prop="name">
                      <Input v-model="formContact.name" placeholder="Enter your name" name="name"></Input>
                    </FormItem>
                    <FormItem label="Email" prop="mail">
                      <Input v-model="formContact.email" placeholder="Enter your email" name="email"></Input>
                    </FormItem>
                    <FormItem label="Desc" prop="desc">
                        <Input v-model="formContact.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
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
        modal10: false,

        formContact: {
            name: '',
            email: '',
            desc: ''
        },

        ruleValidate: {
            name: [
                { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            ],
            mail: [
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
