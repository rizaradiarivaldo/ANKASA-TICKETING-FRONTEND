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
            <b-col class="destinationsTwo">
                <h3>Trending Destinations</h3>
                <p><span>View all</span></p>
            </b-col>
        </b-row>
        <CardScroll/>
        <div>
            <div class="bgCarousel">
                <!-- <img src="../assets/img/topten.svg" alt=""> -->
                <b-carousel id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
  <b-carousel-slide>
    <template v-slot:img>
      <b-card-group>
        <b-card img-src="https://3.bp.blogspot.com/-_ye23HGuhWc/Wlvf9oSaYxI/AAAAAAABOzo/8n42T6m1bZkJBAFEAlpDnbrKpzIauIGhwCKgBGAs/s1600/cuddles_profile_picture.png" overlay></b-card>
        <b-card img-src="https://3.bp.blogspot.com/-_ye23HGuhWc/Wlvf9oSaYxI/AAAAAAABOzo/8n42T6m1bZkJBAFEAlpDnbrKpzIauIGhwCKgBGAs/s1600/cuddles_profile_picture.png" overlay></b-card>
        <b-card img-src="https://3.bp.blogspot.com/-_ye23HGuhWc/Wlvf9oSaYxI/AAAAAAABOzo/8n42T6m1bZkJBAFEAlpDnbrKpzIauIGhwCKgBGAs/s1600/cuddles_profile_picture.png" overlay></b-card>
      </b-card-group>
    </template>
  </b-carousel-slide>
  <b-carousel-slide>
    <template v-slot:img>
      <b-card-group>
        <b-card img-src="https://vignette.wikia.nocookie.net/happytreefriendsadventures/images/d/db/Nutty.png/revision/latest/top-crop/width/360/height/450?cb=20191114033316" overlay></b-card>
        <b-card img-src="https://vignette.wikia.nocookie.net/happytreefriendsadventures/images/d/db/Nutty.png/revision/latest/top-crop/width/360/height/450?cb=20191114033316" overlay></b-card>
        <b-card img-src="https://vignette.wikia.nocookie.net/happytreefriendsadventures/images/d/db/Nutty.png/revision/latest/top-crop/width/360/height/450?cb=20191114033316" overlay></b-card>
      </b-card-group>
    </template>
  </b-carousel-slide>
  <b-carousel-slide>
    <template v-slot:img>
      <b-card-group>
        <b-card img-src="https://vignette.wikia.nocookie.net/happytreefriends/images/c/c4/PetuniaNewStyle.png/revision/latest?cb=20200912045950" overlay></b-card>
        <b-card img-src="https://vignette.wikia.nocookie.net/happytreefriends/images/c/c4/PetuniaNewStyle.png/revision/latest?cb=20200912045950" overlay></b-card>
        <b-card img-src="https://vignette.wikia.nocookie.net/happytreefriends/images/c/c4/PetuniaNewStyle.png/revision/latest?cb=20200912045950" overlay></b-card>
      </b-card-group>
    </template>
  </b-carousel-slide>
</b-carousel>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import CardScroll from '@/components/CardScroll.vue'
export default {
  components: {
    Footer,
    Navbar,
    CardScroll
  }
}
</script>

<style scoped>
.bgCarousel{
    background: tomato;
    padding-left: 9%;
}
.fillDestinations {
    margin-left: 105px;
}
.destinationsTwo {
/* background: red; */
display: flex;
justify-content: space-between;
padding-right: 120px;

}
.destinationsOne{
    padding-right: 89%;
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
span {
    color: #2395ff;
}
.fillFlight{
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
</style>
