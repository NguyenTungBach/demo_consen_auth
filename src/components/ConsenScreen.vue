<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">

              <div class="mb-md-5 mt-md-4 pb-5">

                <h2 class="fw-bold mb-2 text-uppercase">Bạn có chắc muốn cho web này nhận quyền xem ảnh</h2>


                <button class="btn btn-outline-light btn-lg px-5" type="button" @click="checkAuth">Đồng ý</button>

                <div class="d-flex justify-content-center text-center mt-4 pt-1">
                  <a class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                  <a class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                  <a class="text-white"><i class="fab fa-google fa-lg"></i></a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import oauthService from "@/service/oauthService";

export default {
  name: "ConsenScreen",
  methods:{
    checkAuth(){
      let authCode = localStorage.getItem('authCode');
      let redirectUrl = localStorage.getItem('redirectUrl');
      let clientId = localStorage.getItem('clientId');
      oauthService.checkAuthorizationCode(authCode,redirectUrl,clientId).then(response2 =>{
        console.log("check respone JSON response1: "+ JSON.stringify(response2));
        if (response2.status >= 200){
          console.log("check accessToken: "+ response2.data.accessToken);
          var tokenInfo = response2.data.accessToken;
          console.log("get info token: "+ atob(tokenInfo.split(".")[1]));
          console.log("get id: "+ JSON.parse(atob(tokenInfo.split(".")[1])).sub);
          localStorage.setItem('token',response2.data.accessToken);

          localStorage.removeItem('authCode');
          localStorage.removeItem('redirectUrl');
          localStorage.removeItem('client_id');

          window.location.href  = `http://localhost:8082/resourceAuth?token=${response2.data.accessToken}`;
        }
      })
    },
    // checkLogin() {
    //     window.location.href  = `http://localhost:8082/resourceAuth?token=${token}`;
    // }
  },
  created() {
    // this.checkLogin();
  }
}
</script>

<style scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
</style>