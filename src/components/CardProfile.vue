<template>
    <div class="w-100 pl-3 pr-3" >
        <!-- CardProfile Desktop -->
    <div class="card d-sm-block d-none">
        <div class="card-body">
        <div class="text-center">
            <img width="150" class="img-thumbnail" alt="Responsive image" :src="`${URL}/${image}`">
        </div>
        <div class="text-center mt-3" >
            <div class="fileUpload btn btn-outline-primary btn-lg font-weight-bold">
                <span>Select Photo</span>
                <input @change="prosesFile($event)" class="upload" type="file" />
            </div>
        </div>
        <div class="text-center mt-3" >
            <h4 class="font-weight-bold" >{{ form.username }}</h4>
        </div>
        <div class="text-center mt-2" >
            <p style="color: #6B6B6B;" >{{ form.address === ''? 'Address Belum di Tambahkan' : form.address }}</p>
        </div>
        <div class="row">
            <div class="col-6"><p class="" >Cards</p></div>
            <div class="col-6"><p class="text-right add-cards" >+ Add</p></div>
        </div>
        <div class="text-white cards mb-4 pt-2 pl-3 pr-3">
            <p class="font-weight-bold cards-id" >4441 1235 5512 5551</p>
            <div class="row cards-detail">
            <div class="col-6"><p class="" >X Card</p></div>
            <div class="col-6"><p class="text-right" >$ 1,440.2</p></div>
            </div>
        </div>
        <div class="font-weight-bold">
            <router-link to="/profile" class="router-link">
            <p class="body-text-profile ml-2 mb-4"><img class="mr-4" src="../assets/img/user.png">Profile</p>
            </router-link>
            <p class="ml-2 mb-4"><img class="mr-4" src="../assets/img/Vector (4).png">My Review</p>
            <p class="ml-2 mb-4"><img class="mr-4" src="../assets/img/Vector (5).png">Settings</p>
            <a class="body-text-logout ml-2 mb-4" @click="logOut()" style="cursor: pointer;"><img class="mr-4" src="../assets/img/Vector (6).png">Logout</a>
        </div>
        </div>
    </div>
    <!-- CardProfile HP -->
    <div class="w-100 h-100 d-sm-none d-block">
        <div class="position-relative">
            <div class="text-center">
            <img class="img-thumbnail" alt="Responsive image" :src="`${URL}/${image}`">
        </div>
        <!-- <div class="cont-edit-photo">
           <div class="edit-photo" >
            <img class="img-fluid" src="../assets/img/Vector.svg">
        </div>
        </div> -->
        </div>
        <div style="margin-left:30%;" class="fileUpload btn btn-outline-primary btn-lg font-weight-bold">
                <span>Select Photo</span>
                <input @change="prosesFile($event)" class="upload" type="file" />
          </div>
        <div class="text-center mt-3" >
            <h4 class="font-weight-bold" >{{ form.username }}</h4>
        </div>
        <div class="text-center mt-2" >
            <p style="color: #6B6B6B;" >{{ form.address === ''? 'Address Belum di Tambahkan' : form.address }}</p>
        </div>
        <div class="row">
            <div class="col-6"><p class="" >Cards</p></div>
            <div class="col-6"><p class="text-right add-cards" >+ Add</p></div>
        </div>
        <div class="text-white cards mb-4 pt-2 pl-3 pr-3">
            <p class="font-weight-bold cards-id" >4441 1235 5512 5551</p>
            <div class="row cards-detail">
            <div class="col-6"><p class="" >X Card</p></div>
            <div class="col-6"><p class="text-right" >$ 1,440.2</p></div>
            </div>
        </div>
        <div class="font-weight-bold">
            <router-link to="/profile" class="router-link">
            <p class="body-text-profile ml-2 mb-4"><img class="mr-4" src="../assets/img/user.png">Profile</p>
            </router-link>
            <p class="ml-2 mb-4"><img class="mr-4" src="../assets/img/Vector (4).png">My Review</p>
            <p class="ml-2 mb-4"><img class="mr-4" src="../assets/img/Vector (5).png">Settings</p>
            <a class="body-text-logout ml-2 mb-4" @click="logOut()"><img class="mr-4" src="../assets/img/Vector (6).png">Logout</a>
        </div>
    </div>
    </div>

</template>

<script>
import { mapActions } from 'vuex'
require('dotenv').config()
export default {
  props: ['form'],
  data () {
    return {
      image: null,
      user: null,
      URL: process.env.VUE_APP_API_URL
    }
  },
  methods: {
    ...mapActions({
      actionLogout: 'auth/logout',
      actionGetUser: 'users/getUser',
      actionUpdate: 'users/updateProfile'
    }),
    logOut () {
      this.actionLogout().then((resolve) => {
        alert(resolve)
        window.location = '/login'
      })
    },
    prosesFile (event) {
      const fd = new FormData()
      fd.append('image', event.target.files[0])
      const payload = {
        id: localStorage.getItem('idusers'),
        data: fd
      }
      this.actionUpdate(payload)
        .then((response) => {
          if (response === 'Image type must jpg, jpeg or png') {
            alert(response)
          } else if (response === 'File size max 2Mb') {
            alert(response)
          } else {
            alert(response)
            window.location = '/profile'
          }
        })
    }
  },
  mounted () {
    this.actionGetUser()
      .then((result) => {
        this.image = result[0].image
      })
  }
}
</script>

<style>
.edit-photo {
    display:flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #FFFFFF;
    box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
    border-radius: 20px;
    top:1000px;
}
.cont-edit-photo {
    position: absolute;
    right: 100px;
    bottom: 0px;
}
.cards {
    height: 68px;
}
.fileUpload {
    position: relative;
    overflow: hidden;
    margin: 10px;
}
.fileUpload input.upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
}
</style>
