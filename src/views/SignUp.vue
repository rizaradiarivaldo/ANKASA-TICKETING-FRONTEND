<template>
  <div>
    <b-row class="conta">
      <b-col lg="7" class="blueBanner">
        <img src="../assets/img/logo1.svg" alt="">
      </b-col>
      <b-col lg="5" class="formBanner">
        <b-col class="row formTitle">
        <img src="../assets/img/blueairlines.svg">
        <h5>Ankasa</h5>
        </b-col>
        <b-col>
          <div class="login-box">
            <h4>Register</h4>
            <form class="formRegis" @submit.prevent="loadOnce">
              <div class="user-box">
                <input type="text" name="" v-model="form.username" required="">
                <label>Full Name</label>
              </div>
              <div class="user-box">
                <input type="text" name="" v-model="form.email" required="">
                <label>Email</label>
              </div>
              <div class="user-box">
                <input type="password" name="" v-model="form.password" required="">
                <label>Password</label>
              </div>
              <b-button class="mt-3 b-Signup" type="submit" block>Sign Up</b-button>
            </form>
              <div class="form-check checkalign mt-3">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Accept terms and condition</label>
              </div>
              <hr style="border: 1px solid #D8D8D8">
              <p style="color: #4D4D4D; text-align: center">Already have an account?</p>
              <router-link to="/login" style="text-decoration: none;">
                <b-button class="mt-3 b-Signin" type="submit"  block>Sign In</b-button>
              </router-link>

          </div>
        </b-col>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        username: null,
        email: null,
        password: null
      }
    }
  },
  methods: {
    loadOnce () {
      this.onSignUp(this.form)
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    ...mapActions({ onSignUp: 'Auth/register' })
  }
}
</script>

<style scoped>
.blueBanner img {
  padding-top: 100px;
  padding-left: 170px;
}
.checkalign {
  color: #595959;
  size: 100px;
}
.formTitle {
  padding-top: 20px;
  padding-left: 140px;
}
.conta {
  margin-left: 0px;
  margin-right: 0px;
}
.blueBanner {
  background: #2395FF;
  height: 100vh;
}
.b-Signin {
  border: 1px solid #2395FF;
  box-sizing: border-box;
  border-radius: 10px;
  background: #fff;
  color: #2395FF;

}
.b-Signin:hover {
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  color: #fff;
  border: 1px solid #2395ff;
}
.b-Signup{
  border: 1px solid #2395ff;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  padding: 10px;
}
.b-Signup:hover{
  background: #fff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  color: #2395FF;
  border: 1px solid #2395ff;
}
.login-box {
  padding-right: 110px;
  padding-left: 110px;
  padding-top: 20px;
  box-sizing: border-box;
}

.login-box h4 {
  margin: 0 0 20px;
  padding: 0;
  color: #000000;
  text-align: left;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  /* color: #fff; */
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid rgba(210, 194, 255, 0.68);
  outline: none;
  background: transparent;
  /* background: rgba(210, 194, 255, 0.68); */
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 15px;
  color: #9B96AB;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  font-size: 10px;
}
@media screen and (max-width: 375px){
  .blueBanner {
    display: none;
  }
  .login-box {
    position: relative;
    margin: 0px;
    padding: 0px;
    /* background: orangered; */
  }
  .checkalign {
    text-align: center;
  }
  .formTitle {
    margin: 0px;
    padding-left: 10px;
    padding-bottom: 20px;
  }
}
</style>
