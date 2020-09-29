<template>
    <div class="card-profile" >
        <!-- CardProfile Desktop -->
    <div class="card d-sm-block d-none">
        <div class="card-body">
        <div class="text-center">
            <img class="img-thumbnail" alt="Responsive image" src="../assets/img/nnzkZNYWHaU.png">
        </div>
        <div class="text-center mt-3" >
            <button type="button" class="btn btn-outline-primary btn-lg font-weight-bold">Select Photo</button>
        </div>
        <div class="text-center mt-3" >
            <h4 class="font-weight-bold" >Mike Kowalski</h4>
        </div>
        <div class="text-center mt-2" >
            <p style="color: #6B6B6B;" >Medan, Indonesia</p>
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
            <p class="body-text-logout ml-2 mb-4"><img class="mr-4" src="../assets/img/Vector (6).png">Logout</p>
        </div>
        </div>
    </div>
    <!-- CardProfile HP -->
    <div class="w-100 h-100 d-sm-none d-block">
        <div class="position-relative">
            <div class="text-center">
            <img class="img-thumbnail" alt="Responsive image" src="../assets/img/nnzkZNYWHaU.png">
        </div>
        <div class="cont-edit-photo">
           <div class="edit-photo" >
            <img class="img-fluid" src="../assets/img/Vector.svg">
        </div>
        </div>
        </div>
        <div class="text-center mt-3" >
            <h4 class="font-weight-bold" >Mike Kowalski</h4>
        </div>
        <div class="text-center mt-2" >
            <p style="color: #6B6B6B;" >Medan, Indonesia</p>
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
            <router-link to="/editprofile" class="router-link">
            <p class="body-text-profile ml-2 mb-4"><img class="mr-4" src="../assets/img/user.png">Profile</p>
            </router-link>
            <p class="ml-2 mb-4"><img class="mr-4" src="../assets/img/Vector (4).png">My Review</p>
            <p class="ml-2 mb-4"><img class="mr-4" src="../assets/img/Vector (5).png">Settings</p>
            <p class="body-text-logout ml-2 mb-4"><img class="mr-4" src="../assets/img/Vector (6).png">Logout</p>
        </div>
    </div>
    </div>

</template>

<script>
export default {

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
    right: 0px;
    left: 120px;
    bottom: 0px;
}
.cards {
    height: 68px;
}
</style>
