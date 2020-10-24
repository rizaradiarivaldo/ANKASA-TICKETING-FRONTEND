<template>
  <div class="shadow container-fluid" >
      <Navbar/>
        <div class="app-body pt-sm-5 pl-sm-5 pr-sm-5 pb-sm-5 pt-0 pl-0 pr-0 pb-0">
          <!-- desktop -->
          <div class="row d-sm-flex d-none">
          <div class="col-sm-3">
            <CardProfile :form='data'/>
          </div>
          <div class="col-sm-9">
            <div class="card mb-4">
              <div class="card-body">
                <h6 class="card-title cards-title">PROFILE</h6>
                <h3 class="card-text mb-5 font-weight-bold">Profile</h3>
                <div class="row">
                  <div class="col-6">
                    <p class="font-weight-bold" >Contact</p>
                    <div class="login-box">
                    <form @submit.prevent="updateProfile">
                      <div class="user-box">
                        <input type="text" v-model="form.email" name="" required="">
                        <label>Email</label>
                      </div>
                      <div class="user-box">
                        <input type="text" name="" v-model="form.phone" required="">
                        <label>Phone Number</label>
                      </div>
                    </form>
                    <p class="text-right color-default font-weight-bold" >Account Settings
                      <img v-if="select=selected" class="ml-4" @click="arrow()" src="../assets/img/btnback.png">
                      <img v-else class="ml-4" @click="arrow()" src="../assets/img/btnback (1).png">
                    </p>
                  </div>
                  </div>
                  <div class="col-6" :class="{ select: selected }">
                    <p class="font-weight-bold" >Biodata</p>
                    <div class="login-box">
                    <form @submit.prevent="updateProfile">
                      <div class="user-box">
                        <input type="text" name="" v-model="form.username" required="">
                        <label>Username</label>
                      </div>
                      <div class="user-box">
                          <input type="text" name="" v-model="form.city" required="">
                        <label>City</label>
                      </div>
                      <div class="user-box">
                        <input type="text" name="" v-model="form.address">
                        <label>Address</label>
                      </div>
                      <div class="user-box">
                        <input type="text" name="" v-model="form.postcode" required="">
                        <label>Post Code</label>
                      </div>
                      <b-button class="mt-3 b-Save" type="submit">Save</b-button>
                    </form>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- HP -->
        <div class="row no-gutters justify-content-center bg-white d-sm-none d-flex">
          <CardProfile :form='data'/>
          <div class="mt-4 bg-white d-sm-none d-block pr-5 pl-5">
            <h6 class="card-title cards-title">PROFILE</h6>
            <h3 class="card-text mb-5 font-weight-bold">Profile</h3>
            <p class="font-weight-bold mb-2">Contact</p>
            <div class="login-box">
              <form @submit.prevent="updateProfile">
                <div class="user-box">
                  <input type="text" v-model="form.email" name="" required="" />
                  <label>Email</label>
                </div>
                <div class="user-box">
                  <input type="text" name="" v-model="form.phone" required="" />
                  <label>Phone Number</label>
                </div>
              </form>
              <p class="mb-0 text-right color-default font-weight-bold">
                Account Settings
                <img
                  v-if="(select = selected)"
                  class="ml-4"
                  @click="arrow()"
                  src="../assets/img/btnback.png"
                />
                <img
                  v-else
                  class="ml-4"
                  @click="arrow()"
                  src="../assets/img/btnback (1).png"
                />
              </p>
            </div>
            <div :class="{ select: selected }">
              <p class="font-weight-bold mb-2">Biodata</p>
              <div class="login-box">
                <form @submit.prevent="updateProfile">
                  <div class="user-box">
                    <input type="text" name="" v-model="form.username" required="" />
                    <label>Username</label>
                  </div>
                  <div class="user-box">
                    <input type="text" name="" v-model="form.city" required="" />
                    <label>City</label>
                  </div>
                  <div class="user-box">
                    <input type="text" name="" v-model="form.address" required="" />
                    <label>Address</label>
                  </div>
                  <div class="user-box">
                    <input type="text" name="" v-model="form.postcode" required="" />
                    <label>Post Code</label>
                  </div>
                  <b-button class="mt-3 b-Save" type="submit">Save</b-button>
                  <div style="clear: both"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import CardProfile from '@/components/CardProfile.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  title: 'Ankasa | Profile',
  components: {
    Navbar,
    Footer,
    CardProfile
  },
  data () {
    return {
      selected: true,
      form: {
        email: null,
        phone: null,
        username: null,
        city: null,
        address: '',
        postcode: null
      },
      data: null
    }
  },
  methods: {
    arrow () {
      if (this.selected === true) {
        this.selected = false
      } else {
        this.selected = true
      }
    },
    ...mapActions({
      actionGetUser: 'users/getUser',
      actionUpdate: 'users/updateProfile'
    }),
    updateProfile () {
      const fd = new FormData()
      fd.append('email', this.form.email)
      fd.append('phone', this.form.phone)
      fd.append('username', this.form.username)
      fd.append('city', this.form.city)
      fd.append('address', this.form.address)
      fd.append('postcode', this.form.postcode)
      const payload = {
        id: localStorage.getItem('idusers'),
        data: fd
      }
      this.actionUpdate(payload)
        .then((response) => {
          if (response === 'image type must jpg, jpeg, or png') {
            this.$swal('Failed', ' image type must jpg, jpeg, or png', 'error')
          } else if (response === 'File too large, max size 100kb') {
            this.$swal('Failed', ' File too large, max size 100kb', 'error')
          } else {
            this.$swal('Update', 'Successfully update', 'success')
            setTimeout(() => {
              window.location = '/profile'
            }, 1000)
          }
        })
    }
  },
  computed: {
    ...mapGetters({
      getuser: 'users/getUser'
    })
  },
  mounted () {
    this.actionGetUser().then((result) => {
      this.form.email = result[0].email
      this.form.phone = result[0].phone
      this.form.username = result[0].username
      this.form.city = result[0].city
      this.form.address = result[0].address === null ? '' : result[0].address
      this.form.postcode = result[0].postcode
      this.data = result[0]
    })
  }
}
</script>

<style>
.select{
  display: none;
}
.container-fluid{
  padding: 0px !important;
  margin: 0px !important;
  background-color: #F5F6FA !important;
}
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none !important;
  border-radius: 15px !important;
}
/* .app-body{
  background-color: #F5F6FA;
} */
.app-body-content{
  background-color: white;
}
.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 2px solid rgba(35, 149, 255, 1) !important;
  border-radius: 100% !important;
  max-width: 100% !important;
  height: auto;
}
.add-cards {
  color: rgba(35, 149, 255, 1);
}
.cards {
  background-color: rgba(35, 149, 255, 1);
  box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
  border-radius: 10px;
}
.cards-detail {
  margin-top: -15px;
  font-size: 12px;
}
.cards-id {
  letter-spacing: 1px;
  word-spacing: 1px;
}
.cards-title {
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: 0.3em;

  color: #2395FF;
}
.body-text-profile {
  color: #2395FF;
}
.body-text-logout {
  color: #F24545;
}
.color-default {
  color: #2395FF;
}
.color-second {
  color:#6B6B6B;
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
  border-bottom: 2px solid rgba(210, 194, 255, 0.68);
  outline: none;
  background: transparent;
  /* background: rgba(210, 194, 255, 0.68); */
}
.login-box .user-box select {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  /* color: #fff; */
  margin-bottom: 30px;
  border: none;
  border-bottom: 2px solid rgba(210, 194, 255, 0.68);;
  outline: none;
  background: transparent;
  /* background: rgba(210, 194, 255, 0.68); */
}
/* .login-box .user-box select{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("../assets/img/btnback.png") no-repeat ;
} */
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
.login-box .user-box select:focus ~ label,
.login-box .user-box select:valid ~ label {
  top: -20px;
  left: 0;
  font-size: 10px;
}
.b-Save {
  border: none;
  box-sizing: border-box;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  color:  #fff;
  padding: 15px 50px;
  float: right;
}
</style>
