<template>
  <div class="">
    <!-- NavbarDesktop -->
    <nav class="d-sm-block d-none" >
        <div class="row app-nav align-items-center">
            <div class="col-3">
                <p class="font-weight-bold ml-5" ><img class="mr-2" src="../assets/img/vector 02.png">Ankasa</p>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-5">
                        <form class="form-inline">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                            <img src="../assets/img/search.png">
                        </span>
                    </div>
                    <input class="form-control col-9" type="search" placeholder="Where you want to go?" aria-label="Search">
                    </form>
                    </div>
                    <div class="col-7">
                        <div class="row pt-2">
                            <div class="col-4"><p>Find Ticket</p></div>
                            <div class="col-8 selecting"><p>My Booking</p></div>
                        </div>
                    <!-- <router-link><p>Find Ticket</p></router-link>
                    <router-link><p>My Booking</p></router-link> -->
                    </div>
                </div>
            </div>
            <div class="col-3 text-center d-flex">
                <div class="row align-items-center">
                    <div class="col-4">
                        <img src="../assets/img/Vector.png">
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
.app-nav {
    height: 125px;
}
.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 2px solid rgba(35, 149, 255, 1) !important;
  border-radius: 100% !important;
  max-width: 100% !important;
  height: auto;
}
.img-profile{
    border-radius: 100%;
}
</style>
