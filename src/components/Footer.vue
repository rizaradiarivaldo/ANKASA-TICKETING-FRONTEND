<template>
  <div class="bg-white" >
      <!-- desktop -->
      <footer class="app-footer d-sm-flex d-none" >
          <div class="row">
              <div class="col-4">
                  <h4 class="font-weight-bold mb-4" ><img class="mr-2" src="../assets/img/vector 02.png">Ankasa</h4>
                  <p class="text-moto" >Find your Flight and explore the
                    world with us. We will take care of the rest</p>
                  <p class="color-second" >© Ankasa.  All Rights Reserved.</p>
              </div>
              <div class="col-2">
                  <p class="mb-4" >Features</p>
                  <div class="color-second">
                    <p>Find Ticket</p>
                    <p>My Booking</p>
                    <p>Chat</p>
                    <p>Notification</p>
                  </div>
              </div>
              <div class="col-3">
                  <p class="mb-4" >Download Angkasa app</p>
                  <img class="mb-3" src="../assets/img/apple-app-store-travel-awards-globestamp-7 3.png">
                  <img src="../assets/img/apple-app-store-travel-awards-globestamp-7 2.png">
              </div>
              <div class="col-3">
                  <p class="mb-4" >Follow Us</p>
                  <div class="d-inline">
                      <img class="ml-2" src="../assets/img/Vector (1).png">
                      <img class="ml-4" src="../assets/img/Vector (2).png">
                      <img class="ml-4" src="../assets/img/instagram.png">
                      <img class="ml-4" src="../assets/img/youtube.png">
                  </div>
                  <p class="app-map color-second"><img class="mr-2" src="../assets/img/map-pin.png">Jakarta Indonesia</p>
              </div>
          </div>
      </footer>
      <!-- HP -->
      <footer class="d-sm-none d-block app-footer-hp" >
          <h4 class="font-weight-bold mb-4" ><img class="mr-2" src="../assets/img/vector 02.png">Ankasa</h4>
          <p class="text-moto-hp mb-5" >Find your Flight and explore the world with us. We will take care of the rest</p>
        <p class="mb-4 font-weight-bold" >Features</p>
        <div class="row no-gutters footer-menu-hp color-second mb-5">
            <div class="col-3"><p>Find Ticket</p></div>
            <div class="col-3 text-center"><p>My Booking</p></div>
            <div class="col-3 text-center"><p>Chat</p></div>
            <div class="col-3"><p>Notification</p></div>
        </div>
        <p class="mb-4 font-weight-bold" >Download Angkasa app</p>
        <div class="row mb-5">
            <div class="col-6">
                <img class="img-fluid" src="../assets/img/apple-app-store-travel-awards-globestamp-7 3.png">
            </div>
            <div class="col-6">
                <img class="img-fluid" src="../assets/img/apple-app-store-travel-awards-globestamp-7 2.png">
            </div>
        </div>
        <p class="mb-4 font-weight-bold" >Follow Us</p>
        <div class="d-inline">
            <img class="ml-2" src="../assets/img/Vector (1).png">
            <img class="ml-4" src="../assets/img/Vector (2).png">
            <img class="ml-4" src="../assets/img/instagram.png">
            <img class="ml-4" src="../assets/img/youtube.png">
        </div>
        <p class="color-second map-footer-hp mt-5"><img class="mr-2" src="../assets/img/map-pin.png">Jakarta Indonesia</p>
        <p class="color-second mb-4 mt-4" >© Ankasa.  All Rights Reserved.</p>
      </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.app-footer{
    padding-top: 75px;
    padding-left: 125px;
    padding-right: 125px;
    padding-bottom: 25px;
}
.app-footer-hp{
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
}
.text-moto{
    margin-bottom: 200px;
    font-size: 14px;
    line-height: 221.43%;
    color: #6B6B6B;
}
.text-moto-hp{
    font-size: 14px;
    line-height: 221.43%;
    color: #6B6B6B;
}
.app-map{
    margin-top: 225px;
}
.footer-menu-hp {
    font-size: 13px;
}
.map-footer-hp {
    font-size: 13px;
}
</style>
