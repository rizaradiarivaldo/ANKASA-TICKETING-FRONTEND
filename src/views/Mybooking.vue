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
                  <router-link to="/profile" class="router-link">
                    <p class="body-text-profile ml-2 mb-4"><img class="mr-4" src="../assets/img/user.png">Profile</p>
                  </router-link>
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
                <h6 class="card-title cards-title">MY BOOKING</h6>
                <div class="row">
                  <div class="col-6"><h3 class="card-text font-weight-bold">My Booking</h3></div>
                  <div class="col-6 font-weight-bold text-right color-default"><p>Order History</p></div>
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <div class="card-body">
                <h6 class="card-title">Monday, 20 July ‘20 - 12:33</h6>
                <h5 class="font-weight-bold" >IDN <img class="ml-3 mr-3" src="../assets/img/Vector (3).png"> JPN</h5>
                <p class="color-second" >Garuda Indonesia, AB-221</p>
                <hr class="mb-4" >
                <div class="row">
                  <div class="col-6">
                    <p class="color-second font-weight-bold" >Status <span class="booking-status-pending" >Waiting for payment</span></p>
                  </div>
                  <div class="col-6">
                    <p class="font-weight-bold text-right color-default" >View Details <img class="ml-2" src="../assets/img/btnback.png"></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">Monday, 20 July ‘20 - 12:33</h6>
                <h5 class="font-weight-bold" >IDN <img class="ml-3 mr-3" src="../assets/img/Vector (3).png"> JPN</h5>
                <p class="color-second" >Garuda Indonesia, AB-221</p>
                <hr class="mb-4" >
                <div class="row">
                  <div class="col-6">
                    <p class="color-second font-weight-bold" >Status <span class="booking-status-success" >Eticket issued</span></p>
                  </div>
                  <div class="col-6">
                    <p class="font-weight-bold text-right color-default" >View Details <img class="ml-2" src="../assets/img/btnback.png"></p>
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
.router-link{
    text-decoration: none !important;
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
.booking-status-pending {
  background: #FF7F23;
  border-radius: 6px;
  padding: 10px;
  margin-left: 50px;
  color: white;
}
.booking-status-success {
  background: #4FCF4D;
  border-radius: 6px;
  padding: 10px;
  margin-left: 50px;
  color: white;
}
</style>
