<template>
  <div class="container-fluid" >
      <Navbar/>
      <!-- desktop -->
      <div class="d-sm-block d-none">
         <div class="head no-gutters pl-5 pr-5 text-white">
              <div class="col-8 text-headd"><p>Contact Person Details</p></div>
              <div class="col-4">
                  <div class="d-flex">
                    <p class="text-headd pl-4">Flight Details</p>
                    <p class="ml-auto pt-2" >View Details</p>
                  </div>
              </div>
        </div>
        <div class="row body-flight no-gutters pl-5 pr-5">
            <div class="col-sm-8">
            <div class="card p-2 mb-4">
              <div class="card-body">
                <div class="form-box">
                <form>
                <div class="user-box">
                    <input type="text" v-model="form.fullname" name="" required="" />
                    <label>Full Name</label>
                </div>
                <div class="user-box">
                    <input type="text" v-model="form.email" name="" required="" />
                    <label>Email</label>
                </div>
                <div class="row">
                    <div class="col-3">
                      <div class="user-box">
                          <!-- <select name="" id="" v-model="form.countryCode">
                          <option value="+63">+ 63</option>
                          <option value="+64">+ 64</option>
                          <option value="+65">+ 65</option>
                          <option value="+66">+ 66</option>
                          </select> -->

                          <select name="" id="" required v-model="form.countryCode">
                            <option value="+62">+ 62</option>
                            <option value="+63">+ 63</option>
                            <option value="+64">+ 64</option>
                            <option value="+65">+ 65</option>
                            <option value="+66">+ 66</option>
                          </select>
                          <label>Country Code</label>
                      </div>
                    </div>
                    <div class="col-9">
                    <div class="user-box">
                        <input type="text" v-model="form.phone" name="" required="" />
                        <label>Phone Number</label>
                    </div>
                    </div>
                </div>
                <div class="card alert-form">
                    <div class="card-body">
                        <p class="mb-0 ml-3"><img class="mr-3" src="../assets/img/Vectorwarning.png">Make sure the customer data is correct.</p>
                    </div>
                </div>
                </form>
            </div>
              </div>
            </div>
            <p class="text-headd" >Passenger Details</p>
            <div class="card p-2 mb-4">
              <div class="card-body">
                <div class="form-box">
                <form>
                <div class="card mb-3 detail-form">
                    <div class="card-body pr-4 pl-4 pt-1 pb-1">
                        <div class="d-flex align-items-center">
                            <p class="mb-0" >Passenger : 1 Adult</p>
                            <p class="mb-0 ml-auto mr-3">Same as contact person</p>
                            <div class="">
                               <label class="switch mt-3">
                                <input type="checkbox">
                                <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="user-box">
                    <select required v-model="form.title">
                    <option selected>Mr.</option>
                    <option>Mrs.</option>
                    </select>
                    <label>Title</label>
                </div>
                <div class="user-box">
                    <input type="text" v-model="form.fullname" required="" />
                    <label>Full Name</label>
                </div>
                <div class="user-box">
                    <select required v-model="form.nationality">
                    <option v-for="(item, index) in getCountries" :key="index" :value="item.namecountries">{{item.namecountries}}</option>
                    </select>
                    <label>Nationallity</label>
                </div>
                </form>
                </div>
              </div>
            </div>
            <p class="text-headd" >Passenger Details {{getDetailFlight.price}}</p>
            <div class="card mb-4">
              <div class="card-body">
                <div class="d-flex">
                    <div class="form-check ml-4 mb-3">
                    <input class="check-edit mr-2" type="checkbox" value="">
                    </div>
                    <p>Travel Insurance</p>
                    <p class="color-second ml-auto"><span class="color-default" >$ 214,00 </span>/pax</p>
                </div>
                <hr>
                <p>Get travel compensation up to $ 10.000,00</p>
              </div>
            </div>
            <div class="d-flex justify-content-center">
                <b-button class="b-Savee mb-4" @click="bookingTicket()">Proceed to Payment</b-button>
            </div>
          </div>
          <div class="col-sm-4 pl-4">
            <div class="card mb-4">
              <div class="card-body">
                <p class="color-third mb-4" ><img class="mr-4" :src="`${URL}/${getDetailFlight.imageairlines}`" width="60px">{{getDetailFlight.nameairlines}}</p>
                <h5 class="font-weight-bold mb-4" >
                  {{getDetailFlight.fromnamecity}} ({{getDetailFlight.fromalias}})
                  <img class="ml-3 mr-3" src="../assets/img/Vector (3).png">
                  {{getDetailFlight.tonamecity}} ({{getDetailFlight.toalias}})
                </h5>
                <p class="color-third font-size-12 mb-4">{{getDetailFlight.date_departure}} . {{getDetailFlight.departure.slice(0,5)}} - {{getDetailFlight.arrived.slice(0,5)}}</p>
                <p class="color-default font-size-14"><img src="../assets/img/Group 1059.png"> Refundable</p>
                <p class="color-default font-size-14"><img src="../assets/img/Group 1059.png"> Can reschedule</p>
                <hr>
                <div class="d-flex">
                    <h5>Total Payment</h5>
                    <h4 class="color-default ml-auto">$ {{getDetailFlight.price}},00 <img class="ml-2" src="../assets/img/btnback.png"></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- hp -->
      <div class="d-sm-none d-block">
          <div class="head no-gutters pl-3 pr-3 text-white">
                <div class="d-flex w-100 font-weight-bold">
                    <p class="mr-auto">Flight Details</p>
                    <p class="" >View Details</p>
                </div>
         </div>
         <div class="w-100 text-center">
             <img class="coba" width="100%" src="../assets/img/ticketBackground.svg">
            <p class="cobaaja">test</p>
         </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      URL: process.env.VUE_APP_API_URL,
      form: {
        fullname: null,
        email: null,
        countryCode: '+62',
        phone: null,
        title: 'Mr.',
        nationality: 'Indonesia',
        price: 0
      }
    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    ...mapActions({
      actionGetDetailFlight: 'flight/getDetailFlight',
      actionGetUser: 'users/getUser',
      actionGetCountries: 'countries/getCountries',
      InsertBooking: 'booking/insert'
    }),
    bookingTicket () {
      const form = {
        idusers: parseInt(this.getUser[0].idusers),
        idflight: parseInt(this.getDetailFlight.idflight),
        title: this.form.title,
        fullname: this.form.fullname,
        nationality: this.form.nationality,
        insurance: 0,
        payment_status: 0,
        terminal: 'GA-123',
        gate: '123',
        total: parseInt(this.getDetailFlight.price)
      }
      this.InsertBooking(form)
      this.$swal('Booking', 'Pay for your ticket via the nearest ATM or minimarket', 'success')
      setTimeout(() => {
        window.location = '/mybooking'
      }, 1000)
    }
  },
  computed: {
    ...mapGetters({
      getDetailFlight: 'flight/getDetailFlight',
      getUser: 'users/getUser',
      getCountries: 'countries/getCountries'
    })
  },
  mounted () {
    const idflight = localStorage.getItem('idflight')
    const iduser = localStorage.getItem('idusers')
    this.actionGetDetailFlight(idflight)
    this.actionGetUser(iduser)
      .then((result) => {
        this.form.email = this.getUser[0].email
        this.form.fullname = this.getUser[0].username
        this.form.phone = this.getUser[0].phone
        this.form.price = this.getDetailFlight.price
      })
    this.actionGetCountries()
  }
}
</script>

<style>
.coba{
    position: relative;
    z-index: 1;
    top: 0px;
}
.cobaaja{
    position: absolute;
    top: 20px;
    z-index: 2;
    color: #fff;
}
.container-fluid{
  padding: 0px !important;
  margin: 0px !important;
  background-color: #F5F6FA !important;
}
.form-check {
  position: relative;
  display: block;
  padding-left: 0rem !important;
  font-size: 14px;
  font-weight: normal;
}
.head {
  width: 100%;
  height: 176px;
  background: #2395FF;
  border-radius: 0px 0px 30px 30px;
  background-image: url('../assets/img/vector 3.svg');
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}
.text-headd {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
}
.body-flight {
    margin-top: -50px;
}
.b-Savee {
  border: none;
  box-sizing: border-box;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  color:  #fff;
  padding: 15px 50px;
}
.form-box h4 {
  margin: 0 0 20px;
  padding: 0;
  color: #000000;
  text-align: left;
}

.form-box .user-box {
  position: relative;
}

.form-box .user-box input {
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
.form-box .user-box select {
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
/* .form-box .user-box select{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("../assets/img/btnback.png") no-repeat ;
} */
.form-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 15px;
  color: #9B96AB;
  pointer-events: none;
  transition: .5s;
}

.form-box .user-box input:focus ~ label,
.form-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  font-size: 10px;
}
.form-box .user-box select:focus ~ label,
.form-box .user-box select:valid ~ label {
  top: -20px;
  left: 0;
  font-size: 10px;
}
.form-box .alert-form {
    background: rgba(242, 69, 69, 0.1) !important;
    border-radius: 10px !important;
}
.alert-form .card-body p {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #595959;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.detail-form {
    background: rgba(35, 149, 255, 0.1) !important;
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
</style>
