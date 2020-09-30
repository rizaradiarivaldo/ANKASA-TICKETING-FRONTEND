<template>
  <div>
    <Navbar />
    <div>
      <b-jumbotron class="bgBODetail">
        <b-jumbotron class="fillBOPass">
          <div class="fillOne">
            <h1>Booking Pass</h1>
            <p class="h3 mb-2"><b-icon icon="three-dots-vertical"></b-icon></p>
          </div>
          <div class="fillTwo">
            <b-row class="allLine">
              <b-col lg="7" class="liners">
                <div class="travel">
                  <img
                    src="../assets/img/garuda-indonesia-logo-BD82882F07-seeklogo 1.png"
                  />
                  <h1>IDN <img src="../assets/img/planeGray.svg" /> JPN</h1>
                </div>
                <div class="Detail1">
                  <b-col>
                    <h5>Code</h5>
                    <h4>AB-221</h4>
                  </b-col>
                  <b-col>
                    <h5>Class</h5>
                    <h4>Economy</h4>
                  </b-col>
                </div>
                <div class="Detail2">
                  <b-col>
                    <h5>Terminal</h5>
                    <h4>A</h4>
                  </b-col>
                  <b-col>
                    <h5>Gate</h5>
                    <h4>221</h4>
                  </b-col>
                </div>
                <div class="Detail3">
                  <b-col>
                    <h5>Departure</h5>
                    <h4>Monday, 20 July ‘20 - 12:33</h4>
                  </b-col>
                </div>
              </b-col>
              <b-col lg="3">
                  <div class="qrcode">
                      <img src="../assets/img/QR.svg">
                  </div>
              </b-col>
            </b-row>
          </div>
        </b-jumbotron>
      </b-jumbotron>
    </div>
    <Footer />
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

<style scoped>
.allLine{
    margin: 0px;
    border: 2px solid;
    border-radius: 7.5px;
}
.liners{
    border-right: 2px solid;
}
.qrcode{
    margin-left: 145px;
    margin-top: 115px;
}
.Detail3 {
padding-left: 13%;
    margin: 5% 0;
}
.Detail2 {
    padding-left: 13%;
    margin: 5% 0;
    display: flex;
  /* text-align: center; */
  /* justify-content: space-around; */
}
.Detail1 {
    margin: 5% 0;
    padding-left: 13%;
    display: flex;
  /* text-align: center; */
  /* justify-content: space-around; */
}
.travel {
  display: flex;
  justify-content: space-around;
    margin: 5% 0;

}
.bgBODetail {
  background: #2395ff;
}
.fillBOPass {
  background: #ffffff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 20px;
}
.fillOne {
  display: flex;
  justify-content: space-between;
}
.fillTwo {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 7.5px;
}
</style>
