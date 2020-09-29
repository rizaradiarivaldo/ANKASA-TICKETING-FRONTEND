<template>
  <div class="bg-white">
    <!-- NavbarDesktop -->
    <nav class="d-sm-block d-none" :style="$route.path === '/'? 'box-shadow: none;' : 'box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);'">
        <div class="row no-gutters app-nav-middle align-items-center">
            <div class="col-3">
                <router-link to="/" class="router-link" >
                    <h4 class="font-weight-bold ml-5" ><img class="mr-2" src="../assets/img/vector 02.png">Ankasa</h4>
                </router-link>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-5">
                    <form class="form-inline">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">
                            <img class="img-search" src="../assets/img/search.png">
                        </span>
                    </div>
                    <input class="form-control form-control-lg col-9 app-nav-search" type="search" placeholder="Where you want to go?" aria-label="Search">
                    </form>
                    </div>
                    <div class="col-7">
                        <div class="row pt-2">
                            <div class="col-4">
                                <router-link to="/findticket" active-class="selecting" class="router-link" >
                                    <p class="nav-menu">Find Ticket</p>
                                </router-link>
                            </div>
                            <div class="col-8">
                                <router-link to="/mybooking" active-class="selecting" class="router-link">
                                    <p class="nav-menu">My Booking</p>
                                </router-link>
                            </div>
                        </div>
                    <!-- <router-link><p>Find Ticket</p></router-link>
                    <router-link><p>My Booking</p></router-link> -->
                    </div>
                </div>
            </div>
            <div class="col-3 text-center d-flex">
                <div v-if="$route.path === '/'" >
                    <router-link to="/signup">
                        <b-button class="b-SignUp pr-5 pl-5 pt-2 pb-2" type="submit" >Sign Up</b-button>
                    </router-link>
                </div>
                <div v-else class="row align-items-center">
                    <div class="col-4">
                        <router-link to="/profile" class="router-link">
                            <img src="../assets/img/Vector.png">
                        </router-link>
                    </div>
                    <div class="col-4">
                        <img src="../assets/img/bell.png">
                    </div>
                    <div class="col-4">
                            <img class="img-thumbnail" alt="Responsive image" src="../assets/img/nnzkZNYWHaU.png">
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <!-- NavbarHP -->
    <nav class="d-sm-none d-block bg-white">
        <div class="row no-gutters app-nav-middle align-items-center">
            <div class="col-6">
            <router-link to="/" class="router-link" >
                <h4 class="font-weight-bold ml-4" ><img class="mr-3" src="../assets/img/vector 02.png">Ankasa</h4>
            </router-link>
            </div>
            <div class="col-6">
                <a v-b-toggle.collapse-1 >
                    <img class="float-right mr-4" src="../assets/img/align-right.png">
                </a>
            </div>
        </div>
          <b-collapse id="collapse-1" class="ml-3 mr-3">
              <div class="row no-gutters">
                <div class="col-12">
                 <form class="form-inline">
                    <input class="form-control form-control-lg col-12 app-nav-search-hp" type="search" placeholder="Where you want to go?" aria-label="Search">
                 </form>
                </div>
                <div class="col-12 mt-3 mb-3 ml-2">
                    <router-link to="/findticket" active-class="selecting-hp" class="router-link" >
                        <p class="nav-menu">Find Ticket</p>
                    </router-link>
                </div>
                <div class="col-12 mb-3 ml-2">
                    <router-link to="/mybooking" active-class="selecting-hp" class="router-link">
                        <p class="nav-menu">My Booking</p>
                    </router-link>
                </div>
                <div class="col-12 mb-3 ml-2">
                    <router-link to="/profile" active-class="selecting-hp" class="router-link">
                        <p class="nav-menu">Profile</p>
                    </router-link>
                </div>
                <div class="col-12 text-center mb-3">
                  <div v-if="$route.path === '/'" >
                    <router-link to="/signup">
                        <b-button class="b-SignUp pr-5 pl-5 pt-2 pb-2" type="submit" >Sign Up</b-button>
                    </router-link>
                 </div>
                  <div v-else class="row align-items-center">
                    <div class="col-4">
                        <router-link to="/profile" class="router-link">
                            <img src="../assets/img/Vector.png">
                        </router-link>
                    </div>
                    <div class="col-4">
                        <img src="../assets/img/bell.png">
                    </div>
                    <div class="col-4">
                            <img class="img-thumbnail" width="50px" alt="Responsive image" src="../assets/img/nnzkZNYWHaU.png">
                    </div>
                  </div>
                </div>
              </div>
        </b-collapse>
    </nav>
</div>
</template>

<script>
export default {
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
.b-SignUp{
  border: 1px solid #2395ff;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  padding: 1px 100px;
  /* margin: 0px 1px; */
}
.b-SignUp:hover{
  background: #fff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  color: #2395FF;
  border: 1px solid #2395ff;
}
.selecting-hp{
    font-weight: bold;
}
.selecting {
    font-weight: bold;
    /* position: relative; */
    /* background-image: url('../assets/img/Rectangle 20.png'); */
}
.selecting::after{
    content: '';
    width: 40px;
    height: 5px;
    /* justify-content: center;
    align-items: center; */
    background-color:  #2395FF;
    /* margin-top: 10px; */
    position: absolute;
    top: 45px;
    left: 40px;
    border-radius: 10px;
}
.app-nav-middle {
    height: 150px;

}
.app-nav-search {
    background: #F5F5F5;
    border-radius: 0px 10px 10px 0px;
    border: none;
}
.app-nav-search::-webkit-input-placeholder{
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #6B6B6B;
}
.app-nav-search-hp {
    background: #F5F5F5;
    border-radius: 10px;
    border: none;
}
.app-nav-search-hp::-webkit-input-placeholder{
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #6B6B6B;
}
.router-link{
    text-decoration: none !important;
    color: black !important;
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
  background-color: #F5F5F5;
  border: none;
  border-radius: 10px 0px 0px 10px;
}
</style>
