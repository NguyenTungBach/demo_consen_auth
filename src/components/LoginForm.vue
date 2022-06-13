<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">

              <div class="mb-md-5 mt-md-4 pb-5">

                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">Please enter your login and password!</p>

                <div class="form-outline form-white mb-4">
                  <input type="email" id="typeEmailX" class="form-control form-control-lg" v-model="login.username"/>
                  <label class="form-label" for="typeEmailX" >UserName</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" class="form-control form-control-lg" v-model="login.password"/>
                  <label class="form-label" for="typePasswordX" >Password</label>
                </div>

                <p class="small mb-5 pb-lg-2"><a class="text-white-50">Forgot password?</a></p>

                <button class="btn btn-outline-light btn-lg px-5" type="button" @click="checkLogin">Login</button>

                <div class="d-flex justify-content-center text-center mt-4 pt-1">
                  <a class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                  <a class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                  <a class="text-white"><i class="fab fa-google fa-lg"></i></a>
                </div>

              </div>

              <div>
                <p class="mb-0">Don't have an account? <a class="text-white-50 fw-bold">Sign Up</a>
                </p>
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
  name: "LoginForm",
  data(){
    return{
      login:{
        username: "",
        password: ""
      }
    };
  },
  methods:{
    checkLogin(){
      // e.preventDefault();
      oauthService.login(this.login,1,"image","/consenScreen").then(response => {
        if (response.status >= 200){
          console.log("check respone JSON response: "+ JSON.stringify(response));
          localStorage.setItem('authCode',response.data.code);
          localStorage.setItem('scope',response.data.scope);
          localStorage.setItem('redirectUrl',response.data.redirectUrl);
          localStorage.setItem('clientId',response.data.clientId);

          window.location.href  = "http://localhost:8081/consenScreen";
        }
      }).catch(reason =>{
        alert("tài khoản hoặc mật khẩu sai, hãy nhập lại. \n" + reason);
      });
    }
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