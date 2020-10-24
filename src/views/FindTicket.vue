<template>
    <div class="container-fluid" >
        <Navbar/>
        <div class="head">
          <img class="img-head" src="../assets/img/vector 02.svg">
          <div class="d-block text-head">
            <div class="d-flex text-form-to w-100">
              <p >From</p>
              <p class="ml-auto" >To</p>
            </div>
            <div class="d-flex text-country w-100">
              <p>{{fromcity}}({{fromalias}})</p>
              <div class="text-center w-100">
                <img src="../assets/img/Vector (1).svg">
              </div>
              <p class="ml-auto" >{{tocity}}({{toalias}})</p>
            </div>
            <div class="d-flex w-100 text-detail align-items-center">
            <p>{{datedeparture}}</p>
            <div class="bg-white dot" ></div>
            <p>{{parseInt(adult) + parseInt(child)}} Passenger</p>
            <div class="bg-white dot" ></div>
            <p v-if="classflight==0">Economy</p>
            <p v-else-if="classflight==1">Bussiness</p>
            <p v-else-if="classflight==2">First Class</p>
            </div>
          </div>
          <p class="text-white ml-auto mr-5" >Change Search</p>
        </div>
        <div class="bodyy">
          <div class="row no-gutters font-weight-bold m-5">
            <div class="col-3">
              <div class="d-flex ">
                <p>Filter</p>
                <p class="ml-auto color-default" >Reset</p>
              </div>
              <div class="card">
                <div class="card-body">
                    <!-- <p class="w-100">coba <img class="mt-1 float-right" src="../assets/img/btnback (2).png"></p> -->
                    <div class="row">
                      <div class="col-8">
                        <p>Transit</p>
                      </div>
                      <div class="col-4">
                        <img class="mt-1 float-right" src="../assets/img/btnback (2).png">
                      </div>
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        Direct
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        Transit
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        Transit 2+
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-8">
                        <p>Facilities</p>
                      </div>
                      <div class="col-4">
                        <img class="mt-1 float-right" src="../assets/img/btnback (2).png">
                      </div>
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        Luggage
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        In-Flight Meal
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        Wi-fi
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-8">
                        <p>Departure Time</p>
                      </div>
                      <div class="col-4">
                        <img class="mt-1 float-right" src="../assets/img/btnback (2).png">
                      </div>
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        00:00 - 06:00
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        06:00 - 12:00
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        12:00 - 18:00
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        18:00 - 24:00
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-8">
                        <p>Time Arrived</p>
                      </div>
                      <div class="col-4">
                        <img class="mt-1 float-right" src="../assets/img/btnback (2).png">
                      </div>
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        00:00 - 06:00
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        06:00 - 12:00
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        12:00 - 18:00
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        18:00 - 24:00
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-8">
                        <p>Airlines</p>
                      </div>
                      <div class="col-4">
                        <img class="mt-1 float-right" src="../assets/img/btnback (2).png">
                      </div>
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        Garuda Indonesia
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        Air Asia
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        Lion Air
                      </label>
                      <input class="check-edit" type="checkbox" value="">
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-8">
                        <p>Ticket Price</p>
                      </div>
                      <div class="col-4">
                        <img class="mt-1 float-right" src="../assets/img/btnback (2).png">
                      </div>
                    </div>
                    <div class="d-flex font-size-12 color-second w-100">
                      <p>Lowest</p>
                      <p class="ml-auto" >Highest</p>
                    </div>
                    <input type="range" class="custom-range" min="0" max="5">
                    <div class="d-flex color-default w-100">
                      <p>$ 145,00</p>
                      <p class="ml-auto" >$ 300,00</p>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-9 pl-4">
              <div class="d-flex">
                <p>Select Ticket <span class="color-second" >({{getFlight.length}} flight found) </span></p>
                <p class="ml-auto" >Sort by <img class="ml-2" src="../assets/img/Vectorsort.png"></p>
              </div>
              <div class="card mb-4 pl-2" v-for="(item, index) in getFlight" :key="index">
                <div class="card-body">
                  <p class="color-third mb-4" ><img class="mr-4" width="48px" :src="`${url}/${item.imageairlines}`">{{item.nameairlines}}</p>
                  <div>
                    <div class="d-flex mb-2">
                      <div class="d-block mr-5">
                      <h4 class="font-weight-bold" >{{item.fromalias}} <img src="../assets/img/Vector (3).png" alt=""> {{item.toalias}}</h4>
                      <div class="d-flex font-size-12 color-second">
                          <p>{{item.departure.slice(0,5)}}</p>
                          <p class="ml-auto" >{{item.arrived.slice(0,5)}}</p>
                      </div>
                    </div>
                    <div class="d-block pt-1 mr-5">
                      <h6 class="font-weight-bold color-second" >
                        {{ parseInt(item.arrived) - parseInt(item.departure) }} hours {{parseInt(item.arrived.slice(3,5)) - parseInt(item.departure.slice(3,5))}} minutes
                      </h6>
                      <p class="text-center font-size-12 color-second" v-if="item.direct===1">Direct</p>
                      <p class="text-center font-size-12 color-second" v-else-if="item.transit===1">(1 transit)</p>
                      <p class="text-center font-size-12 color-second" v-else-if="item.more_transit===1">(transit 2+)</p>
                      <p class="text-center font-size-12 color-second" v-else></p>
                    </div>
                    <div class="d-inline mt-3 mr-5">
                      <img class="mr-3" v-if="item.luggage===1" src="../assets/img/Vector (7).png">
                      <img class="mr-3" v-if="item.meal===1" src="../assets/img/Vector (8).png">
                      <img class="mr-3" v-if="item.wifi===1" src="../assets/img/Vector (9).png">
                    </div>
                    <p class="color-second mt-3 mr-5"><span class="color-default" >$ {{item.price}},00/pax</span></p>
                    <!-- <router-link  to="/flightdetail"> -->
                    <b-button class="b-Save ml-auto mr-2" type="submit" @click="sendId(item.idflight)">Select</b-button>
                    <!-- </router-link> -->
                    </div>
                    <p class="font-weight-bold color-default" >View Details  <img class="ml-2" src="../assets/img/btnback.png"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  title: 'Ankasa | Find Ticket',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      url: process.env.VUE_APP_API_URL,
      fromcity: localStorage.getItem('fromcity'),
      tocity: localStorage.getItem('tocity'),
      fromalias: localStorage.getItem('fromalias'),
      toalias: localStorage.getItem('toalias'),
      child: localStorage.getItem('child'),
      adult: localStorage.getItem('adult'),
      datedeparture: localStorage.getItem('datedeparture'),
      classflight: localStorage.getItem('classflight')
    }
  },
  methods: {
    ...mapActions({
      getAllFlight: 'flight/getFlight'
    }),
    sendId (id) {
      localStorage.setItem('idflight', id)
      window.location = '/flightdetail'
    }
  },
  computed: {
    ...mapGetters({
      getFlight: 'flight/getFlight'
    })
  },
  mounted () {
    const form = {
      fromcity: localStorage.getItem('fromcity'),
      tocity: localStorage.getItem('tocity'),
      typeflight: localStorage.getItem('typeflight'),
      child: localStorage.getItem('child'),
      adult: localStorage.getItem('adult'),
      classflight: localStorage.getItem('classflight'),
      datedeparture: localStorage.getItem('datedeparture')
    }
    this.getAllFlight(form)
  }
}
</script>

<style>
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
.check-edit {
  position: absolute;
  margin-top: 0.3rem;
  right: 0px;
  border: 2px solid #979797;
  border-radius: 3px;
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
.img-head {
  margin-left: 10%;
}
.text-head {
  font-family: Lato;
  margin-left: 20px;
  color: white;
  width: 300px;
}
.text-head p {
  margin-bottom: 7px;
}
.dot {
  width: 5px;
  height: 5px;
  border-radius: 100%;
  margin-right: 10px;
  margin-left: 10px;
}
.text-form-to {
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
}
.text-country {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.text-detail {
  font-weight: 300px;
  font-size: 12px;
  line-height: 14px;
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
.b-Save {
  border: none;
  box-sizing: border-box;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  color:  #fff;
  width: 150px;
  height: 50px;
}
</style>
