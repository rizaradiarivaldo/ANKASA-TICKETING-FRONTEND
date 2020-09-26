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
                  <button type="button" class="btn btn-outline-primary btn-lg">Select Photo</button>
                </div>
                <div class="text-center mt-3" >
                  <h3>Mike Kowalski</h3>
                </div>
                <div class="text-center mt-2" >
                  <p>Medan, Indonesia</p>
                </div>
                <div>
                  <p class="w-100" >Cards<span class="ml-auto" >+ Add</span></p>
                </div>
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col-sm-9">
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
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
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.app-body{
  background-color: #F5F6FA;
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
</style>
