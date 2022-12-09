<template>
  <div id="loginPage">

    <div class="container">

      <div class="left">
        <div class="head">
          <h2 class="animation a1">С возвращением!</h2>
          <h4 class="animation a2">Войдите в свою учетную запись, используя адрес электронной почты и пароль</h4>
        </div>
        <div v-if="error" class="alert alert-danger">{{error}}</div>
        <form @submit.prevent="Login" class="form">
          <input
            id="email"
            type="email"
            name="email"
            class="form-field animation a3"
            placeholder="Адрес электронной почты"
            value
            required
            autofocus
            v-model="email">
          <input
            id="password"
            type="password"
            class="form-field animation a4"
            placeholder="Пароль"
            value
            required
            autofocus
            v-model="password">
          <div class="links">
            <button class="animation a5">Забыли пароль</button>
            <button @click="$router.push('/register')" class="animation a5">Зарегистрироваться</button>
          </div>
          <button class="animation a6 button">Войти</button>
        </form>
      </div>
      
      <div class="right"></div>

    </div>

  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'loginPage',
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const Login = async () => {
      try {
        await store.dispatch('logIn', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
      }
    }
    return { Login, email, password, error }
  }
};
</script>

<style lang="scss" scoped>
/*Обнуление*/
* {padding: 0;margin: 0;border: 0;}
*,*:before,*:after {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
:focus,:active {outline: none;}
a:focus,a:active {outline: none;}
nav, footer, head, aside {display: block;}
html, body{height: 100%;width: 100%;font-size: 100%;line-height: 1;font-size: 14px;-ms-text-size-adjust: 100%;-moz-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;}
input,button,textarea {font-family: inherit;}
input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner{padding: 0;border: 0;}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img {vertical-align: top;}
h1,h2,h3,h4,h5,h6{font-size: inherit;font-weight: 400;}
/*----------------------------*/

* { box-sizing: border-box; }

.container {
  display: flex;
  height: 100vh;
}

.left {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  animation-name: left;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 1s;
  text-align: center;
}

.right {
  flex: 1;
  background-color: black;
  transition: 1s;
  background-image: url(../assets/HEHE.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #000;
}

.head > h2 {
  margin: 10px;
  text-align: center;
  font-size: 18px;
}

.head > h4 {
  margin-top: 10px;
  font-weight: normal;
  font-size: 15px;
}

.form {
  max-width: 100%;
  display: flex;
  flex-direction: column;


  &> .button {
  padding: 12px 10px;
  border: 0;
  background: linear-gradient(to right, #de48b5 0%,#0097ff 100%); 
  border-radius: 3px;
  margin-top: 10px;
  color: #fff;
  letter-spacing: 1px;
  font-family: 'Rubik', sans-serif;
}

  &-field {
  height: 46px;
  padding: 0 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-family: 'Rubik', sans-serif;
  outline: 0;
  transition: .2s;
  margin-top: 20px;

  &:focus {
  border-color: #0f7ef1;
}
} 
}

.links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0 0 0;
}

.animation {
  animation-name: move;
  animation-duration: .4s;
  animation-fill-mode: both;
  animation-delay: 2s;
}

.a1 {
  animation-delay: 2s;
}

.a2 {
  animation-delay: 2.1s;
}

.a3 {
  animation-delay: 2.2s;
}

.a4 {
  animation-delay: 2.3s;
}

.a5 {
  animation-delay: 2.2s;
}

.a6 {
  animation-delay: 2.2s;
}

@keyframes move {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
  }

  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

@keyframes left {
  0% {
    opacity: 0;
    width: 0;
  }

  100% {
    opacity: 1;
    padding: 20px 40px;
    width: 440px;
  }
}

</style>