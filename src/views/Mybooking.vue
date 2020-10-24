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
                <h6 class="card-title cards-title">
                  MY BOOKING
                </h6>
                <div class="row">
                  <div class="col-6"><h3 class="card-text font-weight-bold">My Booking</h3></div>
                  <div class="col-6 font-weight-bold text-right color-default"><p>Order History</p></div>
                </div>
              </div>
            </div>
            <div class="card mb-4" v-for="(item, index) in getBookingUser" :key="index">
              <div class="card-body">
                <div class="d-flex justify-content-between">
                <h6 class="card-title">{{item.date_departure}} - {{item.departure.slice(0,5)}}</h6>
<!--  -->
                <b-dropdown variant="outline" right class="float-right" menu-class="dropmenu" no-caret>
               <template v-slot:button-content>
                <img src="../assets/img/more-options.png" width="20" height="20" class="">
              </template>
              <b-dropdown-item-button class="mt-2 mb-2" @click="setidBooking(item.idbooking)" v-b-modal.modalCon>
                Confirm
              </b-dropdown-item-button>
              <b-modal id="modalCon" hide-footer title="Confirm">
                <form enctype="multipart/form-data" @submit.prevent="modalConfirm()">
                  <b-form-file type="file" @change="processFile($event)" required></b-form-file>
                <b-button class="mt-2" variant="outline-primary" block type="submit">Send</b-button>
                </form>
              </b-modal>
              <b-dropdown-item-button class="mt-2 mb-2" @click="deleteTicket(item.idbooking)">
                Delete
              </b-dropdown-item-button>
            </b-dropdown>
<!--  -->
                </div>
                <h5 class="font-weight-bold" >{{item.fromalias}} <img class="ml-3 mr-3" src="../assets/img/Vector (3).png"> {{item.toalias}}</h5>
                <p class="color-second" >{{item.nameairlines}}, {{item.code}}</p>
                <hr class="mb-4" >
                <div class="row">
                  <div class="col-6">
                    <p class="color-second font-weight-bold">
                      Status
                      <span class="booking-status-pending" v-if="item.payment_status===0">Waiting for payment</span>
                      <span class="booking-status-success" v-else>Eticket issued</span>
                      </p>
                  </div>
                  <div class="col-6">
                    <p class="font-weight-bold text-right color-default" >View Details <img class="ml-2" src="../assets/img/btnback.png"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- HP -->
        <div class="row no-gutters justify-content-center bg-white d-sm-none d-flex">
          <div class="col-sm-12">
            <div class="card mb-4">
              <div class="card-body">
                <h6 class="card-title cards-title">MY BOOKING</h6>
                <div class="row">
                  <div class="col-6"><h3 class="card-text cards-text-hp font-weight-bold">My Booking</h3></div>
                  <div class="col-6 font-weight-bold text-right color-default"><p>Order History</p></div>
                </div>
              </div>
            </div>
            <div v-for="(item, index) in getBookingUser" :key="index">
              <div class="card mb-4">
              <div class="card-body-hp">
                <h6 class="card-title">{{item.date_departure}} - {{item.departure.slice(0,5)}}</h6>
                <h5 class="font-weight-bold" >{{item.fromalias}} <img class="ml-3 mr-3" src="../assets/img/Vector (3).png"> {{item.toalias}}</h5>
                <p class="color-second" >{{item.nameairlines}}, {{item.code}}</p>
                <hr class="mb-4" >
                <div class="row">
                  <div class="col-12">
                    <p class="color-second font-weight-bold" >Status
                      <span class="booking-status-pending" v-if="item.payment_status===0">Waiting for payment</span>
                      <span class="booking-status-success" v-else>Eticket issued</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <!-- <div class="card">
              <div class="card-body-hp">
                <h6 class="card-title">Monday, 20 July ‘20 - 12:33</h6>
                <h5 class="font-weight-bold" >IDN <img class="ml-3 mr-3" src="../assets/img/Vector (3).png"> JPN</h5>
                <p class="color-second" >Garuda Indonesia, AB-221</p>
                <hr class="mb-4" >
                <div class="row">
                  <div class="col-12">
                    <p class="color-second font-weight-bold" >Status <span class="booking-status-success" >Eticket issued</span></p>
                  </div>
                </div>
              </div>
            </div> -->
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
  title: 'Ankasa | My Booking',
  data () {
    return {
      data: null,
      // form: {
      // id: '',
      image: ''
      // }
    }
  },
  components: {
    Navbar,
    Footer,
    CardProfile
  },
  methods: {
    ...mapActions({
      actionGetUser: 'users/getUser',
      actionUpdate: 'users/updateProfile',
      actionGetBookingUser: 'booking/getDetailBooking',
      actionBookConfirm: 'booking/confirmBook',
      actionBookDelete: 'booking/deleteBook'
    }),
    modalConfirm () {
      const fd = {
        id: localStorage.getItem('idbooking'),
        image: this.image
      }
      this.actionBookConfirm(fd)
        .then((response) => {
          if (response === 'Update payment success') {
            this.$swal('Thanks', 'You successfully Confirmation', 'success')
            setTimeout(() => {
              window.location = '/mybooking'
            }, 2000)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setidBooking (id) {
      localStorage.setItem('idbooking', id)
    },
    deleteTicket (id) {
      this.actionBookDelete(id)
        .then((response) => {
          // alert(response)
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    processFile (event) {
      this.image = event.target.files[0]
    }
  },
  computed: {
    ...mapGetters({
      getBookingUser: 'booking/getDetailBooking'
    })
  },
  mounted () {
    this.actionGetUser().then((result) => {
      this.data = result[0]
    })
    const form = {
      idusers: localStorage.getItem('idusers')
    }
    this.actionGetBookingUser(form)
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
.card-body-hp {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.55rem;
  background: #FFFFFF;
  /* box-shadow: 0px 2px 4px rgba(14, 63, 108, 0.19); */
  border-radius: 12px;
  margin-left: 20px;
  margin-right: 20px;
  background-image: url('../assets/img/ticketBackground.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
  /* margin-top: -15px; */
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
.cards-text-hp {
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
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
  margin-left: 30px;
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
