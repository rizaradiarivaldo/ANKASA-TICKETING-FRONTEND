<template>
  <div>
    <b-row class="conta">
      <b-col lg="7" class="blueBanner">
        <img src="../assets/img/logo1.svg" alt="" />
      </b-col>
      <b-col lg="5" class="formBanner">
        <b-col class="row formTitle">
          <img src="../assets/img/blueairlines.svg" />
          <h5>Ankasa</h5>
        </b-col>
        <b-col>
          <div class="login-box">
            <h4>Login</h4>
            <form class="formRegis" @submit.prevent="LogOn">
              <div class="user-box">
                <input type="text" v-model="form.username" required />
                <label>Username</label>
              </div>
              <div class="user-box">
                <input type="password" v-model="form.password" required />
                <label>Password</label>
              </div>
              <b-button class="mt-3 b-SignIn" type="submit" block
                >Sign In</b-button
              >
            </form>
            <br />
            <p
              style="
                color: #4d4d4d;
                text-align: center;
                padding-bottom: 0px;
                margin-bottom: 0px;
              "
            >
              Did you forgot password?
            </p>
            <a style="margin-left: 65px" href="/forgotpass"
              >Tap here for reset</a
            >
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
        password: null
      }
    }
  },
  methods: {
    LogOn () {
      this.onSignIn(this.form)
        .then((result) => {
          // window.location = '/'
        })
        .catch((err) => {
          alert(err)
        })
    },
    ...mapActions({ onSignIn: 'Auth/login' })
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
  background: #2395ff;
  height: 100vh;
}
/* .b-Signin {
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
} */
.b-SignIn {
  border: 1px solid #2395ff;
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  padding: 10px;
}
.b-SignIn:hover {
  background: #fff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  color: #2395ff;
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
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 15px;
  color: #9b96ab;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  font-size: 10px;
}
@media screen and (max-width: 375px) {
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
/* @media screen and (max-width: 1024px){
  .blueBanner {
    display: none;
  }
  .login-box {
    position: relative;
    margin-left: 50px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-top: 100px;
    padding: 0px;
    background: orangered;
  }
  .checkalign {
    text-align: center;
  }
  .formTitle {
    margin: 0px;
    padding-left: 10px;
    padding-bottom: 20px;
  }
} */
</style>
