<template>
  <div class="app-nav bg-white">
    <!-- NavbarDesktop -->
    <nav class="d-sm-block d-none" >
        <div class="row app-nav-middle align-items-center">
            <div class="col-3">
                <h4 class="font-weight-bold ml-5" ><img class="mr-2" src="../assets/img/vector 02.png">Ankasa</h4>
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
                                <router-link to="/findticket" class="router-link">
                                    <p class="nav-menu" >Find Ticket</p>
                                </router-link>
                            </div>
                            <div class="col-8 selecting" >
                                <router-link to="/mybooking" class="router-link">
                                    <p class="nav-menu" >My Booking</p>
                                </router-link>
                            </div>
                        </div>
                    <!-- <router-link><p>Find Ticket</p></router-link>
                    <router-link><p>My Booking</p></router-link> -->
                    </div>
                </div>
            </div>
            <div class="col-3 text-center d-flex">
                <div class="row align-items-center">
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
</div>
</template>

<script>
export default {

}
</script>

<style>
.app-nav{
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
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
.router-link{
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
  background-color: #F5F5F5;
  border: none;
  border-radius: 10px 0px 0px 10px;
}
</style>
