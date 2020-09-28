<template>
    <div>
        <Navbar/>
        <b-row class="fillFlight">
            <b-col lg="6">
                <b-row class="fillleft">
                <h1>Find your <span>Flight</span></h1>
                <p>and explore the world with us</p>
                </b-row>
                <b-row class="imgSizeLeft">
                    <img src="../assets/img/japan-bg.jpg" alt="">
                </b-row>
            </b-col>
            <b-col lg="1">
<!-- LOL -->
            </b-col>
            <b-col lg="5">
                <b-row class="imgSizeright">
                    <img src="../assets/img/japan-bg.jpg" alt="">
                </b-row>
                <b-row class="dotUnderImg">
                    <img src="../assets/img/dotUnderImg.svg" alt="">
                </b-row>
            </b-col>
        </b-row>
        <b-row class="fillDestinations no-gutters">
            <b-col class="destinationsOne">
                <h5>T R E N D I N G</h5>
            </b-col>
            <b-row>
                <b-col lg="6">
                <h3>Trending Destinations</h3>
                </b-col>
                <b-col lg="6">
                <h5>View all</h5>
                </b-col>
            </b-row>
            <!-- <b-col class="destinationsTwo">
                <div class="row">
                    Trending Destinations
                </div>
            </b-col> -->
        </b-row>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarExplore.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer,
    Navbar
  }
}
</script>

<style scoped>
.destinationsTwo {

}
.destinationsOne{
    padding-right: 90%;
}
.dotUnderImg{
    padding-top: 10%;
    padding-left: 30%;
}
.fillleft{
    margin-right: 0px;
    margin-left: 0px;
    padding-left: 90px;
    padding-right: 145px;
    margin-bottom: 100px;
    margin-top: 100px;
}
.fillleft span {
    color: #2395ff;
}
.fillFlight{
    padding: 50px 0 50px 0;
    margin: 0px;
}
.imgSizeLeft img {
    width: 100%;
    border-top-right-radius: 10%;
    border-bottom-right-radius: 10%;
}
.imgSizeright img {
    width: 100%;
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
}
</style>
