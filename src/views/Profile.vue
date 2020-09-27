<template>
  <div class="shadow container-fluid" >
      <!-- desktop -->
      <Navbar/>
        <div class="app-body pt-5 pl-5 pr-5 pb-5">
          <div class="row">
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body">
                <div class="text-center">
                  <img class="img-thumbnail" alt="Responsive image" src="../assets/img/nnzkZNYWHaU.png">
                </div>
                <div class="text-center mt-3" >
                  <button type="button" class="btn btn-outline-primary btn-lg font-weight-bold">Select Photo</button>
                </div>
                <div class="text-center mt-3" >
                  <h4 class="font-weight-bold" >Mike Kowalski</h4>
                </div>
                <div class="text-center mt-2" >
                  <p style="color: #6B6B6B;" >Medan, Indonesia</p>
                </div>
                <div class="row">
                  <div class="col-6"><p class="" >Cards</p></div>
                  <div class="col-6"><p class="text-right add-cards" >+ Add</p></div>
                </div>
                <div class="text-white cards mb-4 pt-2 pl-3 pr-3">
                  <p class="font-weight-bold cards-id" >4441 1235 5512 5551</p>
                  <div class="row cards-detail">
                    <div class="col-6"><p class="" >X Card</p></div>
                    <div class="col-6"><p class="text-right" >$ 1,440.2</p></div>
                  </div>
                </div>
                <div class="font-weight-bold">
                  <p class="body-text-profile ml-2 mb-4"><img class="mr-4" src="../assets/img/user.png">Profile</p>
                  <p class="ml-2 mb-4"><img class="mr-4" src="../assets/img/Vector (4).png">My Review</p>
                  <p class="ml-2 mb-4"><img class="mr-4" src="../assets/img/Vector (5).png">Settings</p>
                  <p class="body-text-logout ml-2 mb-4"><img class="mr-4" src="../assets/img/Vector (6).png">Logout</p>
                </div>
                </div>
            </div>
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
                    <form>
                      <div class="user-box">
                        <input type="text" name="" required="">
                        <label>Email</label>
                      </div>
                      <div class="user-box">
                        <input type="text" name="" required="">
                        <label>Phone Number</label>
                      </div>
                    </form>
                    <p class="text-right color-default font-weight-bold" >Account Settings <img class="ml-4" src="../assets/img/btnback (1).png"></p>
                  </div>
                  </div>
                  <div class="col-6">
                    <p class="font-weight-bold" >Biodata</p>
                    <div class="login-box">
                    <form>
                      <div class="user-box">
                        <input type="text" name="" required="">
                        <label>Username</label>
                      </div>
                      <div class="user-box">
                        <select required>
                          <option selected></option>
                          <option>Medan</option>
                          <option>Jogjs</option>
                          <option>Jakarta</option>
                        </select>
                        <label>City</label>
                      </div>
                      <div class="user-box">
                        <input type="text" name="" required="">
                        <label>Address</label>
                      </div>
                      <div class="user-box">
                        <input type="text" name="" required="">
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
      </div>
      <Footer/>
      <!-- HP -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
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
.app-body{
  /* background-color: #F5F6FA; */
}
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
  /* display: flex; */
  float: right;
}
</style>
