<template>
  <div>
    <Navbar />
    <b-row class="fillFlight">
      <b-col lg="6" md="5">
        <b-row class="fillleft">
          <h1>Find your <span>Flight</span></h1>
          <p>and explore the world with us</p>
        </b-row>
        <b-row class="imgSizeLeft">
          <img src="../assets/img/japan-bg.jpg" alt="" />
        </b-row>
      </b-col>
      <b-col lg="1">
        <!-- LOL -->
      </b-col>
      <b-col lg="5" md="6">
        <b-row class="imgSizeright">
          <img src="../assets/img/japan-bg.jpg" alt="" />
        </b-row>
        <b-row class="dotUnderImg">
          <img src="../assets/img/dotUnderImg.svg" alt="" />
        </b-row>
      </b-col>
    </b-row>
    <b-row class="fillDestinations no-gutters">
      <b-col class="destinationsOne">
        <h5>T R E N D I N G</h5>
      </b-col>
      <b-col class="destinationsTwo">
        <h3>Trending Destinations</h3>
        <p><span>View all</span></p>
      </b-col>
    </b-row>
    <CardScroll />
    <DestinationsCarousel/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/NavbarExplore.vue'
import Footer from '@/components/Footer.vue'
import CardScroll from '@/components/CardScroll.vue'
import DestinationsCarousel from '@/components/DestinationsCarousel.vue'
export default {
  components: {
    Footer,
    Navbar,
    CardScroll,
    DestinationsCarousel
  }
}
</script>

<style scoped>

.fillDestinations {
  margin-left: 105px;
}
.destinationsTwo {
  display: flex;
  justify-content: space-between;
  padding-right: 120px;
}
.destinationsOne {
  padding-right: 89%;
}
.destinationsOne h5 {
  color: #2395ff;
}
.dotUnderImg {
  padding-top: 10%;
  padding-left: 30%;
}
.fillleft {
  margin-right: 0px;
  margin-left: 0px;
  padding-left: 90px;
  padding-right: 145px;
  margin-bottom: 100px;
  margin-top: 100px;
}
span {
  color: #2395ff;
}
.fillFlight {
  padding: 50px 0 50px 0;
  margin: 0px;
}
.imgSizeLeft img {
  width: 95%;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
}
.imgSizeright img {
  width: 100%;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
}
@media screen and (max-width: 375px){
.fillFlight{
  padding: 0 0;
}
.fillleft{
  /* background: red; */
  padding-left: 10px;
  padding-right: 0px;
  margin-top: 25px;
}
.fillleft h1{
  font-size: 35px;
}
.fillleft p {
  font-size: 15px;
}
.imgSizeLeft img{
  width: 50%;
  margin-left: 69%;
  border-top-right-radius: 0%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  margin-top: -25%;
}
.imgSizeright{
  margin-bottom: 100px;
}
.imgSizeright img{
  margin-right: 65%;
  margin-bottom: 10%;
  margin-top: -15%;
  width: 50%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.dotUnderImg{
  margin: 0px;
}
.dotUnderImg img{
  width: 40%;
  margin-left: 95%;
}
.fillDestinations{
  margin: 0px;
}
.destinationsOne{
  padding-right: 15px;
  margin-left: 20px;
  margin-right: 190px;
}
.destinationsOne h5{
  font-size: 10px;
}
.destinationsTwo{
  margin: 0 0 0 20px;
  padding: 0px;
}
.destinationsTwo h3 {
  font-size: 15px;
}
.destinationsTwo p {
  font-size: 12px;
}
}
</style>
