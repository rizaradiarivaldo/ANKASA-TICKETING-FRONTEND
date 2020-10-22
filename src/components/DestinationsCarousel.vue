<template>
    <div class="containerCarousel">
      <div class="bgCarousel">
        <div class="textTopten">
          <p style="color: #FFFFFF;">T O P 1 0</p>
        </div>
        <div class="textDestinations">
          <h5 style="color: #FFFFFF;">Top 10 Destinations</h5>
        </div>
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          controls
          img-width="1024"
          img-height="480">
          <b-carousel-slide class="asd">
            <template v-slot:img>
              <b-card-group class="imgCarousel">
                <b-avatar
                  src="https://media.nomadicmatt.com/2019/tokyohostel1b.jpg"
                  class="avaSize"
                ></b-avatar>
                <b-avatar
                  src="https://www.nationsonline.org/gallery/USA/Times-Square-New-York.jpg"
                  class="avaSize"
                ></b-avatar>
                <b-avatar
                  src="https://d1bvpoagx8hqbg.cloudfront.net/originals/erasmus-experience-paris-france-marie-nadine-1e9930edd5b129d52796b8c08e1fa4c1.jpg"
                  class="avaSize"
                ></b-avatar>
                <b-avatar
                  src="https://www.azamara.com/sites/default/files/heros/jakarta-indonesia_0.jpg"
                  class="avaSize"
                ></b-avatar>
                <b-avatar
                  src="https://images.movehub.com/wp-content/uploads/2017/12/14094628/Liverpool-1.jpg"
                  class="avaSize"
                ></b-avatar>
              </b-card-group>
            </template>
          </b-carousel-slide>
        </b-carousel>
    </div>
    </div>
</template>

<style scoped>
.containerCarousel{
  margin-left: 120px;
}
.textTopten {
  margin-left: 47%;
}
.textDestinations {
  margin-left: 41%;
  margin-bottom: 5%;
}
.imgCarousel {
  margin-left: 12.5%;
}
.bgCarousel {
  background-image: url('../assets/img/topten.svg');
  background-repeat: no-repeat;
  padding-bottom: 50%;
  padding-top: 5%;
  padding-right: 10%;
  margin-bottom: -25%;
  margin-top: 10%;
}
.avaSize{
    width: 8rem;
    height: 8rem;
    margin-right: 5%;
}
@media screen and (max-width: 375px) {
    .containerCarousel{
        margin-left: 70px;
    }
    .bgCarousel{
        background: #2395FF;
        margin-bottom: 0%;
        border-radius: 60px;
        padding-right: 0px;
    }
    .avaSize{
        width: 2rem;
        height: 2rem;
        margin-right: 5%;
    }
    .imgCarousel{
        margin-left: 13.5%;
    }
    .textTopten{
        margin-left: 40%;
    }
    .textTopten p{
        font-size: 12px;
    }
    .textDestinations{
        margin-left: 17%;
    }
}
</style>
