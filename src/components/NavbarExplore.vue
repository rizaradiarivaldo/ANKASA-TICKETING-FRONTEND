<template>
  <div class="bg-white">
    <!-- NavbarDesktop -->
    <nav
      class="d-sm-block d-none"
      :style="
        $route.path === '/'
          ? 'box-shadow: none;'
          : 'box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);'
      "
    >
      <div class="row no-gutters app-nav-middle align-items-center">
        <div class="col-3">
          <h4 class="font-weight-bold ml-5">
            <img class="mr-2" src="../assets/img/vector 02.png" />Ankasa
          </h4>
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-5">
              <form class="form-inline">
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1">
                    <img class="img-search" src="../assets/img/search.png" />
                  </span>
                </div>
                <input
                  class="form-control form-control-lg col-9 app-nav-search"
                  type="search"
                  placeholder="Where you want to go?"
                  aria-label="Search"
                />
              </form>
            </div>
            <div class="col-7">
              <div class="row pt-2">
                <div class="col-4">
                  <!-- <b-button v-b-modal.modal-1>Launch demo modal</b-button> -->
                  <!-- <router-link to="/findticket" > -->
                  <p v-b-modal.modal-1 class="nav-menu">Find Ticket</p>
                  <!-- </router-link> -->
                  <b-modal id="modal-1">
                    <p class="my-4">Hey,</p>
                    <h3>Where you want to go?</h3>
                    <br />
                    <div class="recentlySearched">
                      <span>Recently Searched</span>
                      <img src="../assets/img/b-arrowModal.svg" alt="" />
                    </div>
                    <form @submit.prevent="getTicket">
                      <div class="vacationsBox">
                        <div class="formAndto">
                          <p>From</p>
                          <p>To</p>
                        </div>
                        <div class="cityTocity">
                            <div>
                                <b-form-select
                              v-model="selected"
                              :options="options"
                            ></b-form-select>
                              <option>Indonesia</option>
                            </div>
                          <img src="../assets/img/where.svg" alt="" />
                          <div>
                              <b-form-select
                              v-model="selected"
                              :options="options"
                            ></b-form-select>
                             <option>Japan</option>
                          </div>
                        </div>
                        <div class="buttonClick">
                          <b-button class="Oneway" type="submit">
                            <img src="../assets/img/planeImg.svg" alt="" /> One
                            way
                          </b-button>
                          <b-button
                            class="RoundTrip"
                            type="submit"
                            style="color: #595959"
                          >
                            <img src="../assets/img/roundTrip.svg" alt="" />
                            Round Trip
                          </b-button>
                        </div>
                      </div>
                      <div class="departure">
                        <p>Departure</p>
                        <b-form-datepicker
                          id="datepicker-dateformat1"
                          :date-format-options="{
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit',
                            weekday: 'short',
                          }"
                          locale="en"
                        ></b-form-datepicker>
                      </div>
                      <div class="manyperson">
                        <p>How many person?</p>
                        <div class="person">
                          <b-input type="text" placeholder="Child"></b-input>
                          <b-input type="text" placeholder="Adult"></b-input>
                        </div>
                      </div>
                      <div class="typeClass">
                        <p>Which class do you want?</p>
                        <b-form-radio-group
                          v-model="selected"
                          :options="options"
                          class="mb-3"
                          value-field="item"
                          text-field="name"
                          disabled-field="notEnabled"
                        ></b-form-radio-group>
                      </div>
                      <div class="b-Flight">
                        <router-link to="/findticket">
                          <b-button
                            class="SearchFlight pr-5 pl-5 pt-2 pb-2"
                            block
                            type="submit"
                          >
                            Search Flight
                            <img src="../assets/img/arrowFlight.svg" alt="" />
                          </b-button>
                        </router-link>
                      </div>
                    </form>
                  </b-modal>
                </div>
                <div class="col-8">
                  <router-link
                    to="/mybooking"
                    active-class="selecting"
                    class="router-link"
                  >
                    <p class="nav-menu">My Booking</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 text-center d-flex">
          <div v-if="$route.path === '/' && token === null">
            <router-link to="/signup">
              <b-button class="b-SignUp pr-5 pl-5 pt-2 pb-2" type="submit"
                >Sign Up</b-button
              >
            </router-link>
          </div>
          <div v-else class="row align-items-center">
            <div class="col-4">
              <router-link to="/profile" class="router-link">
                <img src="../assets/img/Vector.png" />
              </router-link>
            </div>
            <div class="col-4">
              <img src="../assets/img/bell.png" />
            </div>
            <div class="col-4">
              <img
                class="img-thumbnail"
                alt="Responsive image"
                src="../assets/img/nnzkZNYWHaU.png"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- NavbarHP -->
    <nav class="d-sm-none d-block bg-white">
      <div class="row no-gutters app-nav-middle align-items-center">
        <div class="col-6">
          <h4 class="font-weight-bold ml-4">
            <img class="mr-3" src="../assets/img/vector 02.png" />Ankasa
          </h4>
        </div>
        <div class="col-6 alignRight">
          <a v-b-toggle.collapse-1>
            <img class="float-right" src="../assets/img/align-right.png" />
          </a>
        </div>
      </div>
      <b-collapse id="collapse-1" class="ml-3 mr-3">
        <div class="row no-gutters">
          <div class="col-12">
            <form class="form-inline">
              <input
                class="form-control form-control-lg col-12 app-nav-search-hp"
                type="search"
                placeholder="Where you want to go?"
                aria-label="Search"
              />
            </form>
          </div>
          <div class="col-12 mt-3 mb-3 ml-2">
            <router-link
              to="/findticket"
              active-class="selecting-hp"
              class="router-link"
            >
              <p class="nav-menu">Find Ticket</p>
            </router-link>
          </div>
          <div class="col-12 mb-3 ml-2">
            <router-link
              to="/mybooking"
              active-class="selecting-hp"
              class="router-link"
            >
              <p class="nav-menu">My Booking</p>
            </router-link>
          </div>
          <div class="col-12 mb-3 ml-2">
            <router-link
              to="/profile"
              active-class="selecting-hp"
              class="router-link"
            >
              <p class="nav-menu">Profile</p>
            </router-link>
          </div>
          <div class="col-12 text-center mb-3">
            <div v-if="$route.path === '/'">
              <router-link to="/signup">
                <b-button class="b-SignUp pr-5 pl-5 pt-2 pb-2" type="submit"
                  >Sign Up</b-button
                >
              </router-link>
            </div>
            <div v-else class="row align-items-center">
              <div class="col-4">
                <router-link to="/profile" class="router-link">
                  <img src="../assets/img/Vector.png" />
                </router-link>
              </div>
              <div class="col-4">
                <img src="../assets/img/bell.png" />
              </div>
              <div class="col-4">
                <img
                  class="img-thumbnail"
                  width="50px"
                  alt="Responsive image"
                  src="../assets/img/nnzkZNYWHaU.png"
                />
              </div>
            </div>
          </div>
        </div>
      </b-collapse>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      token: localStorage.getItem('token') || null,
      selected: '0',
      options: [
        { item: '0', name: 'Economy' },
        { item: '1', name: 'Business' },
        { item: '2', name: 'First Class' }
      ],
      form: {

      }
    }
  },
  methods: {
    getTicket () {
      this.onTicket(this.form)
        .then((result) => {
          alert(result)
          window.location = '/'
        })
        .catch((err) => {
          alert(err)
        //   window.location = '/login'
        })
    }
  },
  computed: {
    ...mapGetters({
      cities: 'city/allcities'
    })
  }
}
</script>

<style>
.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 2px solid rgba(35, 149, 255, 1) !important;
  border-radius: 100% !important;
  max-width: 100% !important;
  height: auto;
}
.SearchFlight {
  text-decoration: none;
}
.textinButton {
  display: flex;
  justify-content: space-between;
}
.person {
  display: flex;
  justify-content: space-between;
}
.formAndto {
  display: flex;
  justify-content: space-between;
}
.vacationsBox {
  background: #ffffff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  padding: 15px 10px;
  margin-bottom: 10px;
}
.buttonClick {
  display: flex;
  justify-content: space-between;
}
.cityTocity {
  display: flex;
  justify-content: space-between;
}
.recentlySearched {
  display: flex;
  justify-content: space-between;
}
.recentlySearched span {
  color: #2395ff;
}
.modal-header {
  display: none;
}
.modal-footer {
  display: none;
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal.show .modal-dialog {
  position: absolute;
}
.modal-dialog {
  max-width: 385px;
  margin-left: 615px;
  margin-top: 270px;
}
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.0001) !important;
}
.modal-body {
  padding-bottom: 5%;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
}
.modal-content {
  border: 0px;
}
.alignRight img {
  margin-right: 0px;
}
.b-SignUp {
  border: 1px solid #2395ff;
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  padding: 1px 100px;
}
.b-SignUp:hover {
  background: #fff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  color: #2395ff;
  border: 1px solid #2395ff;
}
.SearchFlight {
  border: 1px solid #2395ff;
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  padding: 1px 100px;
}
.SearchFlight:hover {
  background: #fff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  color: #2395ff;
  border: 1px solid #2395ff;
}
.Oneway {
  border: 1px solid #2395ff;
  background: #2395ff;
  border-radius: 10px;
  padding: 0 25px;
}
.RoundTrip {
  background: #f0f0f0;
  border-radius: 6px;
}
.selecting-hp {
  font-weight: bold;
}
.selecting {
  font-weight: bold;
}
.selecting::after {
  content: "";
  width: 40px;
  height: 5px;
  background-color: #2395ff;
  position: absolute;
  top: 45px;
  left: 40px;
  border-radius: 10px;
}
.app-nav-middle {
  height: 150px;
}
.app-nav-search {
  background: #f5f5f5;
  border-radius: 0px 10px 10px 0px;
  border: none;
}
.app-nav-search::-webkit-input-placeholder {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  color: #6b6b6b;
}
.app-nav-search-hp {
  background: #f5f5f5;
  border-radius: 10px;
  border: none;
}
.app-nav-search-hp::-webkit-input-placeholder {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;

  color: #6b6b6b;
}
.router-link {
  text-decoration: none !important;
}
.nav-menu {
  color: #414141 !important;
}
.img-search {
  margin-top: 6px;
  margin-bottom: 6px;
}
.input-group-text {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #f5f5f5;
  border: none;
  border-radius: 10px 0px 0px 10px;
}
</style>
